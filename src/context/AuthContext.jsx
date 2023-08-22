import React, { createContext, useContext, useState } from "react";
import { clientInstance } from "../utils/axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const register = async (userData) => {
    try {
      const response = await clientInstance.post("/users", userData);
      setUser(response.data.user);
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  const login = async (userData) => {
    try {
      const response = await clientInstance.post("/login", userData);
      console.log("response", response);
      setUser(response.data.user);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
