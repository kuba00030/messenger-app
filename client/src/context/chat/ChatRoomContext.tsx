import { createContext, useContext, useReducer } from "react";
import { ContextProviderProps } from "../user/UserContext";

export type TChatType = "group" | "direct";

type UserRole = "admin" | "participant";

export type TUser = {
  id: string;
  name: string;
  nickName?: string;
  avatar: string;
  role: UserRole;
  status?: boolean;
  isBlocked?: boolean;
};

export type TChatRoom = {
  id: string;
  type: TChatType;
  avatar: any;
  name: string;
  isFavourite?: boolean;
  isMuted?: boolean;
};

type ChatRoomAction =
  | { type: "SET_CHAT_ROOM"; payload: TChatRoom }
  | { type: "TOGGLE_FAVOURITE" }
  | { type: "EDIT_CHAT_NAME"; payload: string }
  | { type: "EDIT_CHAT_AVATAR"; payload: string }
  | { type: "MUTE_CHAT_ROOM" }
  | { type: "UNMUTE_CHAT_ROOM" };

const CurrentChatRoomContext = createContext<ChatRoomContext | null>(null);

type ChatRoomContext = {
  chatRoom: TChatRoom;
  setChatRoom: (currentChatRoom: TChatRoom) => void;
  toggleFavourite: () => void;
  editChatName: (chatRoomName: string) => void;
  editChatAvatar: (avatar: string) => void;
  muteChatRoom: () => void;
  unmuteChatRoom: () => void;
};

const chatRoomReducer = (
  state: TChatRoom,
  action: ChatRoomAction
): TChatRoom => {
  switch (action.type) {
    case "SET_CHAT_ROOM":
      return action.payload;
    case "TOGGLE_FAVOURITE":
      return { ...state, isFavourite: !state.isFavourite };
    case "EDIT_CHAT_NAME":
      return { ...state, name: action.payload };
    case "EDIT_CHAT_AVATAR":
      return { ...state, avatar: action.payload };
    case "MUTE_CHAT_ROOM":
      return { ...state, isMuted: true };
    case "UNMUTE_CHAT_ROOM":
      return { ...state, isMuted: false };
    default:
      return state;
  }
};

export const ChatRoomContextProvider = ({ children }: ContextProviderProps) => {
  const [state, dispatch] = useReducer(chatRoomReducer, {
    id: "0000",
    type: "group",
    avatar: "",
    name: "Family group",
    isFavourite: false,
    isMuted: false,
  });

  const setChatRoom = (currentChatRoom: TChatRoom) => {
    dispatch({ type: "SET_CHAT_ROOM", payload: currentChatRoom });
  };

  const toggleFavourite = () => {
    dispatch({ type: "TOGGLE_FAVOURITE" });
  };

  const editChatName = (name: string) => {
    dispatch({ type: "EDIT_CHAT_NAME", payload: name });
  };

  const editChatAvatar = (avatar: string) => {
    dispatch({ type: "EDIT_CHAT_AVATAR", payload: avatar });
  };

  const muteChatRoom = () => {
    dispatch({ type: "MUTE_CHAT_ROOM" });
  };

  const unmuteChatRoom = () => {
    dispatch({ type: "UNMUTE_CHAT_ROOM" });
  };

  return (
    <CurrentChatRoomContext.Provider
      value={{
        chatRoom: state,
        setChatRoom,
        toggleFavourite,
        editChatName,
        editChatAvatar,
        muteChatRoom,
        unmuteChatRoom,
      }}
    >
      {children}
    </CurrentChatRoomContext.Provider>
  );
};

export const useChatRoomContext = () => {
  const context = useContext(CurrentChatRoomContext);

  if (!context) {
    throw new Error(
      "useChatRoomContext should be used within ChatRoomContextProvider"
    );
  }

  return context;
};
