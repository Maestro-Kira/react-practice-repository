import { createContext, useState } from "react";

export const AppContext = createContext(null);

export const ParentComponent = ({ children }) => {
  const [message, setMessage] = useState("Hello I am passed to components");
  const [message2, setMessage2] = useState("Hello I am message 222");

  const value = {
    message,
    setMessage,
    message2,
    setMessage2,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
