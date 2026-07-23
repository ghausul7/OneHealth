import { createContext, useContext, useState } from "react";
import { login as loginRequest } from "../services/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  async function login(role, email) {
    const { token, user } = await loginRequest({ role, email });
    localStorage.setItem("onehealth_token", token);
    setUser(user);
    return user;
  }

  function logout() {
    localStorage.removeItem("onehealth_token");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}