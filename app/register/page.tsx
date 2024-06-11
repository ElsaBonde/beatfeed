"use client"

import { useState } from "react";
import { registerUser } from "../actions/userActions";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registerError, setRegisterError] = useState("");

  const handleRegister = async (event: any) => {
    event.preventDefault();
    try {
      const user = await registerUser(username, password);
      console.log("User registered successfully:", user);
      setUsername("");
      setPassword("");
      setRegisterError("");
    } catch (error) {
      console.error("Error registering user:", error);
      setRegisterError("Username already exists. Please try another.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-stone-200">
      <h1>Register to BeatFeed</h1>
      <div className="flex flex-col gap-4">
        <form className="flex flex-col" onSubmit={handleRegister}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {registerError && <p className="text-red-500">{registerError}</p>}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

