import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../../hooks/local-storage/useLocalStorage";

export type TUser = {
  id: string;
  firstName: string;
  lastName: string;
  city: string;
  country: string;
  email: string;
  img: any | null;
};

type TUserContext = {
  user: TUser;
};

export type ContextProviderProps = {
  children: React.ReactNode;
};

const UserContext = createContext<TUserContext | null>(null);

export const UserContextProvider = ({ children }: ContextProviderProps) => {
  const { getItem } = useLocalStorage("user");
  const [user] = useState<TUser>({
    id: "1111",
    firstName: "bbb",
    lastName: "ccc",
    city: "London",
    country: "UK",
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
