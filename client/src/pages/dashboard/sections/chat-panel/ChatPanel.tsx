import "./chat-panel.css";
import { Searchbar } from "../../../../components/ui/searchbar/Searchbar";
import { ChatList, ChatListItem } from "./chat-list/ChatList";
import { Notification } from "../../../../components/ui/badges/NotificationBadge";
import { Header } from "../../../../components/ui/header/Header";
import { useState } from "react";
import { AddButton } from "../../../../components/ui/buttons/Buttons";
import { useToggleCompoenent } from "../../../../hooks/toggle-component/useToggleComponent";
import { Spinner } from "react-bootstrap";
import { useModalContext } from "../../../../context/modal/ModalContext";
import { ChatCreateNewChatModalBody } from "../../../../components/ui/modal/ChatCreateNewChatModalBody";

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
  notifications: Notification;
  isFavourite: boolean;
  type: "group" | "direct";
  status: boolean;
  lastMessage: string;
};
// last smg is date so we have sort

// TODO:
// setting chatroom
// add new chat modal => type of chat select "group" | "direct"
// if group can add more than one participant if direct add only one
// set if chat is going to be fav or not
export const ChatPanel = () => {
  const { isOpened: isSearching, setIsOpened: setIsSearching } =
    useToggleCompoenent(false);
  const { setModalContent, handleOpenModal } = useModalContext();
  const [chatRooms, setChatRooms] = useState<Chat[]>([
    {
      chatPhoto: "",
      chatID: "1",
      chatName: "John Doe",
      notifications: 5,
      isFavourite: true,
      type: "group",
      lastMessage: "",
      status: true,
    },
  ]);

  const renderChatList = (
    listTitle: string,
    isFavourite: boolean,
    type?: "group" | "direct"
  ) => {
    return (
      <ChatList header={listTitle}>
        {isFavourite
          ? chatRooms
              .filter((chat) => chat.isFavourite === isFavourite)
              .map((chat, index) => (
                <ChatListItem
                  key={index}
                  avatar={chat.chatPhoto}
                  chatName={chat.chatName}
                  chatID={chat.chatID}
                  notifications={chat.notifications}
                  chatStatus={chat.status}
                />
              ))
          : chatRooms
              .filter(
                (chat) => chat.type === type && chat.isFavourite === false
              )
              .map((chat, index) => (
                <ChatListItem
                  key={index}
                  avatar={chat.chatPhoto}
                  chatName={chat.chatName}
                  chatID={chat.chatID}
                  notifications={chat.notifications}
                  chatStatus={chat.status}
                />
              ))}
      </ChatList>
    );
  };

  const handleIsSearching = (searchValue?: string) => {
    if (searchValue) setIsSearching(true);
  };

  const handleSearch = (searchValue: string) => {
    if (searchValue) {
      setChatRooms(
        chatRooms.filter((chat) => chat.chatName.includes(searchValue))
      );
    } else {
      // TODO:
      // ask db for 20-50 chatroom based on lates send msgs
      setChatRooms([
        {
          chatPhoto: "",
          chatID: "1",
          chatName: "John Doe",
          notifications: 5,
          isFavourite: true,
          type: "group",
          lastMessage: "",
          status: true,
        },
      ]);
    }
    setIsSearching(false);
  };

  const handleAddChat = () => {
    setModalContent({
      title: "Contacts",
      size: "lg",
      component: <ChatCreateNewChatModalBody />,
    });
    handleOpenModal();
  };
  return (
    <>
      <div className="mx-4 mx-md-2 mx-xl-4">
        <div className="d-flex flex-row justify-content-between">
          <Header title="Chat" size="l" color="gray" fontWeight="semibold" />
          <AddButton onClick={handleAddChat} />
        </div>
        <Searchbar
          containerClass="d-flex flex-row-reverse mt-4 mb-4 p-2 rounded-2 bg-my-gray"
          iconClass="border-0 fc-my-gray shadow-none fs-sm"
          inputClass="px-2 fc-my-gray bg-transparent fs-sm fw-semibold border-0 w-100"
          delay={500}
          immediateAction={handleIsSearching}
          delayedAction={handleSearch}
        />
      </div>
      {/* favourite chats */}
      {isSearching ? (
        <div className="d-flex flex-fill justify-content-center align-items-center">
          <Spinner variant="success" animation="border" />
        </div>
      ) : (
        <>
          {chatRooms.some((chat) => chat.isFavourite) &&
            renderChatList("Favourite", true)}

          {/* Direct messages */}
          {chatRooms.some(
            (chat) =>
              chat.type === "direct" ||
              (chat.type === "group" && !chat.isFavourite)
          ) && renderChatList("Direct messages", false, "direct")}
        </>
      )}
    </>
  );
};
