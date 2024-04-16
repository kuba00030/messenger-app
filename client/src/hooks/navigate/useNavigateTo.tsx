import { useNavigate } from "react-router";

export const useNavigateTo = () => {
  const navigationTo = useNavigate();

  const navigateTo = (path: string) => {
    navigationTo(path);
  };

  return { navigateTo };
};
