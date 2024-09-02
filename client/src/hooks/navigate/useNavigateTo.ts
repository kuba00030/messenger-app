import { useNavigate } from "react-router";

export const useNavigateTo = () => {
  const navigate = useNavigate();

  const navigateTo = (path: string, replace: boolean) => {
    navigate(path, { replace: replace });
  };

  return { navigateTo };
};
