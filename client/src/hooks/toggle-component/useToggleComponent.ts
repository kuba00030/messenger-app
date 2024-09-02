import { useState } from "react";

export const useToggleCompoenent = (initState: boolean) => {
  const [isOpened, setIsOpened] = useState<boolean>(initState);

  const handleToggleComponent = () => {
    setIsOpened((prevState) => !prevState);
  };

  return { isOpened, handleToggleComponent };
};
