import { useState } from "react";
import { TUser } from "../../context/chat/ChatRoomContext";

export const useUserList = () => {
  const [users, setUsers] = useState<TUser[]>([
    {
      id: "2222",
      name: "Friend1",
      avatar: "",
      role: "participant",
      isBlocked: false,
    },
  ]);

  const updateUserList = (users: TUser[]) => {
    setUsers(users);
  };

  return { users, setUsers, updateUserList };
};
