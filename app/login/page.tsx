"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { logInUser } from "../actions/userActions";
import { useAuth } from "../authContext";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const router = useRouter();
  const { logIn } = useAuth();

  const handleFormSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const user = await logInUser(username, password);
      if (!user) {
        setLoginError("Invalid username or password.");
        return;
      }
      console.log("User logged in successfully:", user);
      setLoginError("");
      logIn(username, password);
      router.push("/");
    } catch (error) {
      console.error("Error logging in:", error);
      setLoginError("Invalid username or password.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen p-8 bg-stone-200 gap-12">
      <h1 className="text-xl">Login to BeatFeed</h1>
      <div className="flex flex-col gap-4">
        <form className="flex flex-col gap-3" onSubmit={handleFormSubmit}>
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
          {loginError && <p className="text-red-500 text-xs font-semibold">{loginError}</p>}
          </div>
          <button type="submit" className="bg-black text-white p-2 rounded-sm">Login</button>
        </form>
      </div>
      <p>
        Not a member?{" "}
        <Link href="/register" className="font-semibold">Become a part of our community here!</Link>
      </p>
    </div>
  );
}
