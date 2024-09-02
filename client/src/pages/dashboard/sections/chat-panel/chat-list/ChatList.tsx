import "./chat-list-item.css";
import { Button } from "react-bootstrap";
import { AddButton } from "../../../../../components/ui/buttons/Buttons";
import { Header } from "../../../../../components/ui/header/Header";
import {
  Notification,
  NotificationBadge,
} from "../../../../../components/ui/badges/NotificationBadge";
import { ProfileCard } from "../../../../../components/ui/data/ProfileCard";
import { useMobileChatWindowContext } from "../../../../../context/chat/MobileChatWindowContext";

type ChatLis = {
  header: string;
  children: React.ReactNode;
};

type TChatListItem = {
  chatName: string;
  chatID: string;
  userStatus: boolean;
  notifications: Notification;
  avatar: any;
};

const currentChat = "1";

export const ChatListItem = ({
  chatName,
  chatID,
  userStatus,
  avatar,
  notifications,
}: TChatListItem) => {
  const { handleToggleChat } = useMobileChatWindowContext();

  const handleClick = () => {
    handleToggleChat();
    //TODO: set window chat with chosen user
  };

  return (
    <Button
      onClick={handleClick}
      className={`d-flex flex-row gap-2 gap-md-0 align-items-center chat-list-item-h border-0 shadow-none py-0 px-4 px-md-2 px-xl-4 rounded-0 tr-02 ${
        chatID === currentChat ? "chat-list-item-active" : "bg-transparent"
      }  `}
    >
      <ProfileCard avatar={avatar} status={userStatus} displayName={chatName} />
      <NotificationBadge
        className="ms-auto my-auto bg-my-foggy rounded-1 fs-xxs fw-semibold p-1"
        notifications={notifications}
      />
    </Button>
  );
};

export const ChatList = ({ header, children }: ChatLis) => {
  return (
    <div
      className="d-flex flex-column overflow-hidden pt-1"
      style={{ flex: 1 }}
    >
      <div className="d-flex flex-row align-items-center justify-content-between mx-4 mx-md-2 mx-xl-4">
        <Header title={header} fontWeight="semibold" size="xs" color="gray" />
        <AddButton onClick={() => console.log("New conversation")} />
      </div>
      <div className="d-flex flex-column overflow-auto mt-4">{children}</div>
    </div>
  );
};
