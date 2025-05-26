import { User } from "@/App";
import { createContext, useContext } from "react";

export const UserContext = createContext<User | undefined>(undefined);

export const useUserContext = () => {
  const user = useContext(UserContext);
  if (user === undefined) {
    throw new Error("Make sure you provided Context");
  }
  return user;
};
