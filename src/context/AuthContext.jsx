import React, { createContext, useContext, useState } from "react";
import { clientInstance } from "../utils/axios";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const register = async (userData) => {
    try {
      console.log("user: ", userData )
      const response = await clientInstance.post("/signup", userData);
      setUser(response);

    } catch (error) {
      toast.error("OOPS Something went wrong")
    }
  };

  const login = async (userData) => {

    try {
      const response = await clientInstance.post(
        "/login",
        userData
      );
      console.log("response", response);
      setUser(response);
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
