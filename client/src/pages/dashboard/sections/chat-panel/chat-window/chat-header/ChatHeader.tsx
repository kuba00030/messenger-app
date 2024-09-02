import "./chat-header.css";
import { useWindowWidth } from "../../../../../../hooks/window/useWindowWidth";
import { StatusHolder } from "../../../../../../components/ui/status-holder/StatusHolder";
import {
  BackButton,
  IconButton,
} from "../../../../../../components/ui/buttons/Buttons";
import { iconsClassBootsrap } from "../../../../../../components/ui/icons/icons";
import { useChatRoomContext } from "../../../../../../context/chat/ChatRoomContext";
import { useMobileChatWindowContext } from "../../../../../../context/chat/MobileChatWindowContext";
import { useChatMembersContext } from "../../../../../../context/chat/ChatMembers";
import { AvatarWithStatus } from "../../../../../../components/ui/avatar/avatar-with-status/AvatarWithStatus";
import { Avatar } from "../../../../../../components/ui/avatar/regular-avatar/Avatar";

const UserData = ({
  status,
  userFullName,
}: {
  status: boolean;
  userFullName: string;
}) => {
  return (
    <div className="d-flex flex-column fc-my-gray ms-2 overflow-hidden">
      <span className="fw-semibold fs-m text-truncate">{userFullName}</span>
      <StatusHolder
        status={status}
        ifFalseMsg="Offline"
        ifTrueMsg="Online"
        className="fs-xs"
      />
    </div>
  );
};

export const ChatHeader = ({
  toggleChatDetails,
}: {
  toggleChatDetails: () => void;
}) => {
  const { windowWidth } = useWindowWidth();
  const { handleToggleChat } = useMobileChatWindowContext();
  const { chatRoom } = useChatRoomContext();
  const { members } = useChatMembersContext();

  // TODO:
  // func for each btn

  return (
    <div className="d-flex flex-row align-items-center justify-content-between py-4 px-2 px-md-2 px-xl-4 bg-blured overflow-hidden">
      {/* user data */}
      <div className="d-flex flex-row align-items-center">
        {windowWidth < 768 && (
          <BackButton
            classname="chat-header-back-button bg-transparent border-0 shadow-none me-2"
            onClick={handleToggleChat}
          />
        )}
        {chatRoom.type === "direct" ? (
          <AvatarWithStatus
            size="m"
            avatar={members[1].avatar}
            imgContainerBgClass="bg-my-gray"
          />
        ) : (
          <Avatar
            size="m"
            avatar={chatRoom.avatar}
            imgContainerBgClass="bg-my-gray"
          />
        )}
        <UserData userFullName={chatRoom.name} status={true} />
      </div>
      {/* action buttons within chhat */}
      <div className="d-flex flex-row gap-4">
        {/* audio call */}
        <IconButton
          buttonProps={{
            type: "button",
            className: `${iconsClassBootsrap.phoneFill} bg-transparent shadow-none border-0 chat-window-btn tr-02`,
          }}
        />
        {/* video call */}
        <IconButton
          buttonProps={{
            type: "button",
            className: `${iconsClassBootsrap.camera} bg-transparent shadow-none border-0 chat-window-btn tr-02`,
          }}
        />
        {/* more info */}
        <IconButton
          buttonProps={{
            type: "button",
            className: `${iconsClassBootsrap.info} bg-transparent shadow-none border-0 chat-window-btn tr-02`,
            onClick: toggleChatDetails,
          }}
        />
      </div>
    </div>
  );
};
