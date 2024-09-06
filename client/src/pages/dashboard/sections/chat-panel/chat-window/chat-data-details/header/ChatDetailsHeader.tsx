import "./chat-details-header.css";
import { IconButton } from "../../../../../../../components/ui/buttons/Buttons";
import { useChatRoomContext } from "../../../../../../../context/chat/ChatRoomContext";
import { StatusDot } from "../../../../../../../components/ui/avatar/avatar-with-status/AvatarWithStatus";
import { useChatMembersContext } from "../../../../../../../context/chat/ChatMembers";
import { iconsClassBootsrap } from "../../../../../../../components/ui/icons/icons";
import {
  Image,
  ImageOverlay,
} from "../chat-data/sections/media/images/MediaImages";

export const ChatInfoHeader = ({ handleBack }: { handleBack: () => void }) => {
  const { chatRoom } = useChatRoomContext();
  const { members } = useChatMembersContext();
  return (
    <div className="p-4">
      {/* TODO:
      ohiti url cannot be empty */}
      <Image
        photoUrl={
          "https://www.freeiconspng.com/thumbs/group-png/group-of-people-in-a-formation-23.png"
        }
        containerClass="chat-details-header-avatar bg-my-gray"
      >
        <>
          <IconButton
            buttonProps={{
              type: "button",
              className:
                "chat-details-header-button bg-default border-0 shadow-none",
              onClick: handleBack,
            }}
            icon={<i className={iconsClassBootsrap.arrowRight} />}
          />
          <div className="chat-details-header-data ms-4 pb-4 fc-my-gray">
            <span>{chatRoom.name}</span>
            <div>
              {chatRoom.type === "direct" && (
                <div className="position-relative d-flex flex-row align-items-center gap-2">
                  <StatusDot
                    className={`rounded-circle status-dot ${
                      members[1].status
                        ? "rounded-circle bg-default status-dot"
                        : "bg-danger"
                    }`}
                  />
                  <span>{members[1].status ? "Online" : "Offline"}</span>
                </div>
              )}
              <span className="fw-semibold fw-sm"></span>
            </div>
          </div>
          <ImageOverlay className="chat-details-header-avatar-overlay" />
        </>
      </Image>
    </div>
  );
};
