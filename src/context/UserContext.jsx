import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [nama, setNama] = useState("Natasya");
  return <UserContext.Provider value={{ nama, setNama }}>{children}</UserContext.Provider>;
}

export const useUser = () => useContext(UserContext);