import { TChatUser } from "../../pages/dashboard/sections/chat-panel/chat-window/chat-data-details/chat-data/sections/common-details/CommonDetails";

export const isUserAdmin = (
  userID: string,
  chatParticipants: TChatUser[]
): boolean => {
  return chatParticipants.some(
    (user) => user.id === userID && user.role === "admin"
  );
};
