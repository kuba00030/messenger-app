import { useState } from "react";

export const useOpenOnClick = (initState: boolean) => {
  const [isOpened, setIsOpened] = useState<boolean>(initState);

  return { isOpened, setIsOpened };
};
