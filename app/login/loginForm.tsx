"use client";

import { useState } from "react";
import { logInUser } from "../actions/userActions";

interface LoginFormProps {
  onLoginSuccess: (user: any) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const user = await logInUser(username, password);
      if (user) {
        console.log("User logged in successfully:", user);
        onLoginSuccess(user);
        setLoginError("");
      }
    } catch (error) {
      setLoginError("Invalid username or password.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-stone-200">
      <h1>Login to BeatFeed</h1>
      <div className="flex flex-col gap-4">
        <form className="flex flex-col" onSubmit={handleFormSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          {loginError && <p className="text-red-500">{loginError}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
