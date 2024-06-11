import Link from "next/link";

export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col gap-4">
        <h1>Login</h1>
        <form className="flex flex-col">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
          <button className="items-start" type="submit">Login</button>
        </form>
        <p>
          Not a member? <Link href="/register">Become a part of our community here!</Link>
        </p>
      </div>
    </div>
  );
}
