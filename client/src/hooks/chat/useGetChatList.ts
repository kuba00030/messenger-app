import { useState } from "react";
import { TChatRoom } from "../../context/chat/ChatRoomContext";

type TChatList = TChatRoom[];

export const useGetChatList = () => {
  const [chatList, setChatList] = useState<TChatList>([]);

  const updateChatList = (newChats: []) => {
    setChatList((prevChatList) => [...prevChatList, ...newChats]);
  };

  return {};
};
