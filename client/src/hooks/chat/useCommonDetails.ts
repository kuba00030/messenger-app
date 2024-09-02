import { useState } from "react";
import { TChatType } from "../../context/chat/ChatRoomContext";

export type TCommonItem = {
  id: string;
  avatar: string;
  name: string;
};

export type TCommonDetails = {
  commonItems: TCommonItem[];
  commonItemsCount: number;
};

export const useCommonDetails = (chatType: TChatType, chatID: string) => {
  const [commonDetails, setCommonDetails] = useState<TCommonDetails | null>(
    null
  );

  return { commonDetails };
};
