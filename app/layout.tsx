import type { Metadata } from "next";
import { AuthProvider } from "./authContext";
import FooterMobile from "./components/FooterMobile";
import Header from "./components/Header";
import "./globals.css";
import SideBar from "./components/SideBar";

export const metadata: Metadata = {
  title: "SoundStream",
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
            <div className="flex gap-6 xs:flex-col md:flex-row">
            <SideBar />
            {children}
            <FooterMobile />
            </div>
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
