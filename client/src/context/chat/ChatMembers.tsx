import { createContext, useContext, useReducer } from "react";
import { ContextProviderProps } from "../user/UserContext";
import { TChatParticipant } from "./ChatRoomContext";

type ChatMembersContextType = {
  members: TChatParticipant[];
  checkIfUserAdmin: (userID: string) => boolean;
  getAdmins: () => TChatParticipant[];
  addMember: (newMember: TChatParticipant) => void;
  removeMember: (memberId: string) => void;
  addAdmin: (memberId: string) => void;
  removeAdmin: (memberId: string) => void;
  updateMembers: (members: TChatParticipant[]) => void;
  clearMembers: () => void;
  checkIfUserMember: (userID: string) => boolean;
};

const ChatMembersContext = createContext<ChatMembersContextType | null>(null);

type State = {
  members: TChatParticipant[];
};

type Action =
  | { type: "ADD_MEMBER"; payload: TChatParticipant }
  | { type: "REMOVE_MEMBER"; payload: string }
  | { type: "ADD_ADMIN"; payload: string }
  | { type: "REMOVE_ADMIN"; payload: string }
  | { type: "UPDATE_MEMBERS"; payload: TChatParticipant[] }
  | { type: "CLEAR_STATE"; payload: TChatParticipant[] };

const initState: State = {
  members: [
    { id: "1111", avatar: "", role: "admin", status: true, name: "ja" },
    {
      id: "1112",
      avatar: "",
      role: "participant",
      status: true,
      name: "John Doe",
    },
    {
      id: "1113",
      avatar: "",
      role: "participant",
      status: true,
      name: "Ann Doe",
    },
  ],
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
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

  const addMember = (newMember: TChatParticipant) => {
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

  const updateMembers = (members: TChatParticipant[]) => {
    dispatch({ type: "UPDATE_MEMBERS", payload: members });
  };

  const clearMembers = () => {
    dispatch({ type: "CLEAR_STATE", payload: [] });
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
