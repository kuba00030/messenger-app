import { createContext, useContext, useState } from "react";
import { ContextProviderProps } from "../user/UserContext";

type UserRole = "admin" | "participant";

export type TChatType = "group" | "direct";

export type TChatParticipant = {
  id: string;
  name: string;
  nickName?: string;
  avatar: string;
  status: boolean;
  role: UserRole;
};

export type TChatRoom = {
  id: string;
  type: TChatType;
  avatar: any;
  name: string;
};

const fakeData: TChatRoom = {
  id: "0000",
  type: "group",
  avatar: "",
  name: "Family group",
};

type ChatRoomContext = {
  chatRoom: TChatRoom;
  setChatRoom: (currentChatRoom: TChatRoom) => void;
};

const CurrentChatRoomContex = createContext<ChatRoomContext | null>(null);

export const ChatRoomContextProvider = ({ children }: ContextProviderProps) => {
  const [chatRoom, setChatRoom] = useState<TChatRoom>(fakeData);

  return (
    <CurrentChatRoomContex.Provider value={{ chatRoom, setChatRoom }}>
      {children}
    </CurrentChatRoomContex.Provider>
  );
};

export const useChatRoomContext = () => {
  const context = useContext(CurrentChatRoomContex);

  if (!context) {
    throw new Error(
      "useCurrentChatRoomContext should be used within CurrentChatRoomProvider"
    );
  }

  return context;
};
