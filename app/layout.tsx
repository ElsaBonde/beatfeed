import type { Metadata } from "next";
import { AuthProvider } from "./authContext";
import Header from "./components/Header";
import "./globals.css";
import FooterMobile from "./components/FooterMobile";

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
        <div className="max-w-3xl mx-auto bg-white p-4 flex flex-col gap-4">
          <AuthProvider>
            <Header />
            {children}
            <FooterMobile />
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
