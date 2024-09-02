import { createContext, useContext, useState } from "react";
import { ContextProviderProps } from "../../user/UserContext";

export type TMessage = {
  id: string;
  userID: string;
  value: string;
  media?: TChatAttachmentItem;
  status: boolean;
  date: Date;
};

export type TChatAttachmentItem = {
  id: string;
  url: string;
  size: string;
  name: string;
};

type TChatRoomMsgsContext = {
  messages: TMessage[];
  setMessages: (messsages: TMessage[]) => void;
};

const ChatRoomMsgsContext = createContext<TChatRoomMsgsContext | null>(null);

export const ChatRoomMsgsProvider = ({ children }: ContextProviderProps) => {
  const [messages, setMessages] = useState<TMessage[]>([
    {
      id: "1",
      userID: "1111",
      date: new Date(),
      value: "Some random message 1",
      status: true,
    },
    {
      id: "2",
      userID: "1111",
      date: new Date(),
      value: "Some random message 2",
      status: true,
    },
    {
      id: "3",
      userID: "1111",
      date: new Date(),
      value: "Some random message 3",
      status: true,
    },
    {
      id: "4",
      userID: "1112",
      date: new Date(),
      value: "Some random message 4",
      status: true,
    },
  ]);

  return (
    <ChatRoomMsgsContext.Provider value={{ messages, setMessages }}>
      {children}
    </ChatRoomMsgsContext.Provider>
  );
};

export const useChatRoomMsgsContext = () => {
  const context = useContext(ChatRoomMsgsContext);

  if (!context) {
    throw new Error(
      "useChatRoomMsgsContext should be use within ChatRoomMsgsProvider"
    );
  }

  return context;
};
