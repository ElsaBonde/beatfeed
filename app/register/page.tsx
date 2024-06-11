"use client"

import { useState } from "react";
import { registerUser } from "../actions/userActions";
import RegisterVideo from "../components/RegisterVideo";

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
      if (username === "" || password === "") {
        setRegisterError("Username or password is missing.");
      } else {
      setRegisterError("Username already exists. Please try another.");
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen p-8 bg-stone-200 gap-12">
      <div className="flex flex-col gap-4">
      <h1 className="text-xl">Register to BeatFeed</h1>
      <RegisterVideo />
      </div>
      <div className="flex flex-col gap-4">
        <form className="flex flex-col gap-3" onSubmit={handleRegister}>
          <div className="flex flex-col gap-2">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          </div>
          <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            {registerError && <p className="text-red-500">{registerError}</p>}
          </div>
          <button type="submit" className="bg-black text-white p-2 rounded-sm">Register</button>
        </form>
      </div>
    </div>
  );
}

