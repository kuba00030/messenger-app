import "./chat-message.css";
import { Avatar } from "../../../../../../components/ui/avatar/regular-avatar/Avatar";
import { useUserContext } from "../../../../../../context/user/UserContext";
import { MsgDropdownMenu } from "./dropdown/MsgDropdownMenu";
import { useChatRoomMsgsContext } from "../../../../../../context/chat/CurrentChatRoomMsgs";

type Message = {
  value: string;
  date: Date;
  userID: string;
};

type ChatMessage = {
  message: Message;
};

export const MessageContent = ({
  userID,
  value,
}: {
  userID: string;
  value: string;
}) => {
  const { user } = useUserContext();
  return (
    <p
      className={`rounded-1 m-0 px-2 py-2 break fc-my-white ${
        userID !== user?.id ? "friend-user-msg" : "user-msg"
      }`}
    >
      {value}
    </p>
  );
};

const ChatMessage = ({ message }: ChatMessage) => {
  // TODO:
  // React to message
  const { user } = useUserContext();

  return (
    <div
      className={`d-flex flex-fill align-items-center justify-content-end chat-window-message-container  ${
        message.userID !== user?.id ? "flex-row-reverse" : "flex-row"
      }`}
      tabIndex={0}
    >
      <MsgDropdownMenu />
      <div
        className={`d-flex flex-row align-items-center chat-window-msg-wrapper`}
      >
        {message.userID !== user.id && (
          <Avatar size="sm" avatar={null} imgContainerBgClass="bg-my-dark" />
        )}
        <MessageContent userID={message.userID} value={message.value} />
      </div>
    </div>
  );
};

export const ChatMessages = () => {
  const { messages } = useChatRoomMsgsContext();
  return (
    <div className="d-flex flex-column flex-fill overflow-auto py-4 px-2 px-sm-4">
      <div className="d-flex flex-column w-100 mt-auto gap-2">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </div>
    </div>
  );
};
