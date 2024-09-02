import "./chat-window.css";
import { ChatForm } from "./chat-form/ChatForm";
import { ChatHeader } from "./chat-header/ChatHeader";
import { useWindowWidth } from "../../../../../hooks/window/useWindowWidth";
import { ChatMessages } from "./chat-messages/ChatMessages";
import { toggleState } from "../../../../../utils/buttons/buttonFuncs";
import { ChatDetails } from "./chat-data-details/ChatDetails";
import { useState } from "react";
import { useMobileChatWindowContext } from "../../../../../context/chat/MobileChatWindowContext";

export const ChatWindow = () => {
  const { isOpened: windowOpened } = useMobileChatWindowContext();
  const [chatDetailsOpened, setChatDetailsOpened] = useState<boolean>(false);
  const { windowWidth } = useWindowWidth();

  const toggleChatDetails = () => {
    toggleState(setChatDetailsOpened);
  };

  return (
    <div
      className={`${
        windowWidth < 768 && windowOpened
          ? "chat-window-opened"
          : "chat-window-closed"
      } chat-window d-flex flex-row w-100 overflow-hidden bg-my-gray tr-02`}
    >
      <div className="d-flex flex-column flex-fill">
        <ChatHeader toggleChatDetails={toggleChatDetails} />
        <ChatMessages />
        <ChatForm />
      </div>
      <ChatDetails
        isOpened={chatDetailsOpened}
        closeChatDetails={toggleChatDetails}
      />
    </div>
  );
};
