import { createContext, useState } from "react";

export const UserContext = createContext();

const GlobalState = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("userInfo"));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        email,
        setEmail,
        password,
        setPassword,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default GlobalState;
