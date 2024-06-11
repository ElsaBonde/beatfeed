import type { Metadata } from "next";
import { AuthProvider } from "./authContext";
import Header from "./components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "BeatFeed",
  description: "Share your favorite beats with the world!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-2xl mx-auto">
          <Header />
          <AuthProvider>{children}</AuthProvider>
        </div>
      </body>
    </html>
  );
}
