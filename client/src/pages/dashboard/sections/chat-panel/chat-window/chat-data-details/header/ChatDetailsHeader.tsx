import "./chat-details-header.css";
import { BackButton } from "../../../../../../../components/ui/buttons/Buttons";
import { useChatRoomContext } from "../../../../../../../context/chat/ChatRoomContext";

export const ChatInfoHeader = ({ handleBack }: { handleBack: () => void }) => {
  const { chatRoom } = useChatRoomContext();
  return (
    <div className="position-relative mx-4 pt-4">
      <img
        className="bg-dark chat-details-header-avatar"
        src={chatRoom.avatar}
      />

      <BackButton
        classname="chat-details-header-button bg-transparent border-0 shadow-none mt-2 ms-2"
        onClick={handleBack}
      />
      <div className="chat-details-header-data ms-4 mb-4 fc-my-gray">
        <span>{chatRoom.chatName}</span>
        <div>
          <span>Status</span>
          <span></span>
        </div>
      </div>
    </div>
  );
};
