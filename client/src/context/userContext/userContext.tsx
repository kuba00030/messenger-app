import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../../hooks/local-storage/useLocalStorage";

export type User = {
  id: string;
  name: string;
  lastName: string;
  email: string;
  img: any | null;
};

type UserContext = {
  user: User | null;
};

export type ContextProviderProps = {
  children: React.ReactNode;
};

export const UserContext = createContext<UserContext | null>(null);

export const UserContextProvider = ({ children }: ContextProviderProps) => {
  const { getItem } = useLocalStorage("user");
  const [user] = useState<User | null>({
    id: "aaa",
    name: "bbb",
    lastName: "ccc",
    email: "aaa@ccc.pl",
    img: null,
  });
  //  false || getItem();
  return (
    <UserContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error(
      "useUserContext should be used within a UserContextProvider"
    );
  }
  return context;
};
