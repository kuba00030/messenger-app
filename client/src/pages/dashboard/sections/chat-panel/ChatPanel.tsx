import "./chat-panel.css";
import { Searchbar } from "../../../../components/ui/searchbar/Searchbar";
import { ChatList, ChatListItem } from "./chat-list/ChatList";
import { Notification } from "../../../../components/ui/badges/NotificationBadge";
import { Header } from "../../../../components/ui/header/Header";

export type ChatMember = {
  userID: string;
  name: string;
  lastName: string;
  avatar: any;
  activityStatus: boolean;
};

export type Message = {
  messageID: string;
  userID: string;
  value: string;
  status: "Seen" | "Unseen";
  createdAt: string;
  replayTo: string | null;
};

export type Chat = {
  chatPhoto: any;
  chatID: string;
  chatName: string;
  members: ChatMember[];
  notifications: Notification;
  isFavourite: boolean;
  type: "group" | "direct";
  lastMessage: string;
};

const testChats: Chat[] = [
  {
    chatPhoto: "",
    chatID: "1",
    chatName: "John Doe",
    members: [
      {
        userID: "1",
        name: "Ja",
        lastName: "Ja",
        avatar: "",
        activityStatus: true,
      },
      {
        userID: "2",
        name: "John",
        lastName: "Doe",
        avatar: "",
        activityStatus: true,
      },
    ],
    notifications: 5,
    isFavourite: true,
    type: "direct",
    lastMessage: "",
  },
  {
    chatPhoto: "",
    chatID: "2",
    chatName: "Ann Kowalski",
    members: [
      {
        userID: "1",
        name: "Ja",
        lastName: "Ja",
        avatar: "",
        activityStatus: true,
      },
      {
        userID: "3",
        name: "Ann",
        lastName: "Kowalski",
        avatar: "",
        activityStatus: false,
      },
    ],
    notifications: 5,
    isFavourite: false,
    type: "direct",
    lastMessage: "",
  },
  {
    chatPhoto: "",
    chatID: "3",
    chatName: "Family group",
    members: [
      {
        userID: "1",
        name: "Ja",
        lastName: "Ja",
        avatar: "",
        activityStatus: true,
      },
      {
        userID: "2",
        name: "John",
        lastName: "Doe",
        avatar: "",
        activityStatus: true,
      },
      {
        userID: "3",
        name: "Ann",
        lastName: "Kowalski",
        avatar: "",
        activityStatus: false,
      },
    ],
    notifications: 5,
    isFavourite: true,
    type: "group",
    lastMessage: "",
  },
  {
    chatPhoto: null,
    chatID: "4",
    chatName: "Work group",
    members: [
      {
        userID: "1",
        name: "Ja",
        lastName: "Ja",
        avatar: "",
        activityStatus: true,
      },
      {
        userID: "2",
        name: "John",
        lastName: "Doe",
        avatar: "",
        activityStatus: true,
      },
      {
        userID: "3",
        name: "Ann",
        lastName: "Kowalski",
        avatar: "",
        activityStatus: false,
      },
    ],
    notifications: 5,
    isFavourite: false,
    type: "group",
    lastMessage: "",
  },
];

export const ChatPanel = () => {
  const renderChatList = (
    listTitle: string,
    isFavourite: boolean,
    type?: "group" | "direct"
  ) => {
    return (
      <ChatList header={listTitle}>
        {isFavourite
          ? testChats
              .filter((chat) => chat.isFavourite === isFavourite)
              .map((chat, index) => (
                <ChatListItem
                  key={index}
                  chatPhoto={chat.chatPhoto}
                  chatName={
                    chat.type === "group"
                      ? chat.chatName
                      : `${chat.members[1].name} ${chat.members[1].lastName}`
                  }
                  chatID={chat.chatID}
                  notifications={chat.notifications}
                  userStatus={
                    chat.type === "group"
                      ? null
                      : chat.members[1].activityStatus
                  }
                />
              ))
          : testChats
              .filter(
                (chat) => chat.type === type && chat.isFavourite === false
              )
              .map((chat, index) => (
                <ChatListItem
                  key={index}
                  chatPhoto={chat.chatPhoto}
                  chatName={chat.chatName}
                  chatID={chat.chatID}
                  notifications={chat.notifications}
                  userStatus={
                    chat.type === "group"
                      ? null
                      : chat.members[1].activityStatus
                  }
                />
              ))}
      </ChatList>
    );
  };
  return (
    <>
      <div className="mx-4 mx-md-2 mx-xl-4">
        <Header title="Chat" size="l" color="gray" fontWeight="semibold" />
        <Searchbar
          containerClass="d-flex flex-row-reverse mt-4 mb-4 p-2 rounded-2 bg-my-gray"
          iconClass="border-0 fc-my-gray shadow-none fs-sm"
          inputClass="px-2 fc-my-gray bg-transparent fs-sm fw-semibold border-0 w-100"
          onChange={() => console.log("a")}
        />
      </div>
      {/* favourite chats */}
      {renderChatList("Favourite", true)}

      {/* Direct messages */}
      {renderChatList("Direct messages", false, "direct")}

      {/* Group chats */}
      {renderChatList("Groups", false, "group")}
    </>
  );
};
