import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import ClientOnly from "@/components/ClientOnly";
import Modal from "@/components/modals/Modal";
import RegisterModal from "@/components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "@/components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AeroLodge",
  description: "Rent hotels for your vacation needs",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
