import type { Metadata } from "next";
import { Google_Sans } from "next/font/google";
import "./globals.css";
import React from "react";
import NavbarWidget from "@/components/widgets/Navbar";

const googleSans = Google_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Centaury",
  description: "Exhibitions & Collaborations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${googleSans.className} relative min-h-screen antialiased`}
      >
        <NavbarWidget />
        <main className="">
          {children}
        </main>
      </body>
    </html>
  );
}