"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { logInUser } from "./actions/userActions";

type AuthContextType = {
  isLoggedIn: boolean;
  logIn: (username: string, password: string) => Promise<void>;
  logOut: () => void;
  user: any;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const logIn = async (username: string, password: string) => {
    try {
      const userData = await logInUser(username, password);
      if (!userData) {
        throw new Error("Invalid username or password.");
      }
      setUser(userData);
      setIsLoggedIn(true);

      localStorage.setItem("user", JSON.stringify(userData));
    } catch (error) {
      console.error("Error logging in:", error);
      setUser(null);
      setIsLoggedIn(false);
    }
  };

  const logOut = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, logIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
