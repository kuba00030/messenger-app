import { createContext, useContext, useReducer } from "react";
import { ContextProviderProps } from "../user/UserContext";
import { TUser } from "./ChatRoomContext";

type ChatMembersContextType = {
  members: TUser[];
  checkIfUserAdmin: (userID: string) => boolean;
  getAdmins: () => TUser[];
  addMember: (newMember: TUser) => void;
  removeMember: (memberId: string) => void;
  addAdmin: (memberId: string) => void;
  removeAdmin: (memberId: string) => void;
  updateMembers: (members: TUser[]) => void;
  clearMembers: () => void;
  checkIfUserMember: (userId: string) => boolean;
  blockMember: (memberId: string) => void;
  unblockMember: (memberId: string) => void;
  editMemberName: (memberId: string, newNickName: string) => void;
  removeMemberNickName: (memberId: string) => void; // Nowa metoda
};

const ChatMembersContext = createContext<ChatMembersContextType | null>(null);

type State = {
  members: TUser[];
};

type Action =
  | { type: "UPDATE_MEMBERS"; payload: TUser[] }
  | { type: "ADD_MEMBER"; payload: TUser }
  | { type: "REMOVE_MEMBER"; payload: string }
  | { type: "BLOCK_MEMBER"; payload: string }
  | { type: "UNBLOCK_MEMBER"; payload: string }
  | { type: "ADD_ADMIN"; payload: string }
  | { type: "REMOVE_ADMIN"; payload: string }
  | { type: "EDIT_MEMBER_NAME"; payload: { id: string; newNickName: string } }
  | { type: "REMOVE_MEMBER_NICKNAME"; payload: string } // Nowa akcja
  | { type: "CLEAR_STATE"; payload: TUser[] };

const initState: State = {
  members: [
    {
      id: "1111",
      avatar: "",
      role: "admin",
      name: "ja",
      isBlocked: false,
    },
    {
      id: "1112",
      avatar: "",
      role: "participant",
      name: "John Doe",
      isBlocked: false,
    },
  ],
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "BLOCK_MEMBER":
      return {
        members: state.members.map((member) =>
          member.id === action.payload ? { ...member, isBlocked: true } : member
        ),
      };
    case "UNBLOCK_MEMBER":
      return {
        members: state.members.map((member) =>
          member.id === action.payload
            ? { ...member, isBlocked: false }
            : member
        ),
      };
    case "ADD_MEMBER":
      return { members: [action.payload, ...state.members] };
    case "REMOVE_MEMBER":
      return {
        members: state.members.filter((member) => member.id !== action.payload),
      };
    case "ADD_ADMIN":
      return {
        members: state.members.map((member) =>
          member.id === action.payload ? { ...member, role: "admin" } : member
        ),
      };
    case "REMOVE_ADMIN":
      return {
        members: state.members.map((member) =>
          member.id === action.payload
            ? { ...member, role: "participant" }
            : member
        ),
      };
    case "EDIT_MEMBER_NAME":
      return {
        members: state.members.map((member) =>
          member.id === action.payload.id
            ? { ...member, nickName: action.payload.newNickName }
            : member
        ),
      };
    case "REMOVE_MEMBER_NICKNAME":
      return {
        members: state.members.map((member) =>
          member.id === action.payload
            ? { ...member, nickName: undefined }
            : member
        ),
      };
    case "UPDATE_MEMBERS":
      return { members: action.payload };
    case "CLEAR_STATE":
      return { members: [] };

    default:
      return state;
  }
};

export const ChatMembersContextProvider = ({
  children,
}: ContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const addMember = (newMember: TUser) => {
    dispatch({ type: "ADD_MEMBER", payload: newMember });
  };

  const removeMember = (memberId: string) => {
    dispatch({ type: "REMOVE_MEMBER", payload: memberId });
  };

  const addAdmin = (memberId: string) => {
    dispatch({ type: "ADD_ADMIN", payload: memberId });
  };

  const removeAdmin = (memberId: string) => {
    dispatch({ type: "REMOVE_ADMIN", payload: memberId });
  };

  const updateMembers = (members: TUser[]) => {
    dispatch({ type: "UPDATE_MEMBERS", payload: members });
  };

  const clearMembers = () => {
    dispatch({ type: "CLEAR_STATE", payload: [] });
  };

  const blockMember = (memberId: string) => {
    dispatch({ type: "BLOCK_MEMBER", payload: memberId });
  };

  const unblockMember = (memberId: string) => {
    dispatch({ type: "UNBLOCK_MEMBER", payload: memberId });
  };

  const editMemberName = (memberId: string, newNickName: string) => {
    dispatch({
      type: "EDIT_MEMBER_NAME",
      payload: { id: memberId, newNickName },
    });
  };

  const removeMemberNickName = (memberId: string) => {
    dispatch({ type: "REMOVE_MEMBER_NICKNAME", payload: memberId });
  };

  const checkIfUserAdmin = (userID: string): boolean => {
    return state.members.some((admin) => admin.id === userID);
  };

  const checkIfUserMember = (userID: string): boolean => {
    return state.members.some((member) => member.id === userID);
  };

  const getAdmins = () => {
    return state.members.filter((member) => member.role === "admin");
  };

  return (
    <ChatMembersContext.Provider
      value={{
        members: state.members,
        checkIfUserAdmin,
        getAdmins,
        addMember,
        removeMember,
        addAdmin,
        removeAdmin,
        updateMembers,
        clearMembers,
        checkIfUserMember,
        blockMember,
        unblockMember,
        editMemberName,
        removeMemberNickName,
      }}
    >
      {children}
    </ChatMembersContext.Provider>
  );
};

export const useChatMembersContext = () => {
  const context = useContext(ChatMembersContext);

  if (!context) {
    throw new Error(
      "useChatMembersContext should be used within ChatMembersContext"
    );
  }
  return context;
};
