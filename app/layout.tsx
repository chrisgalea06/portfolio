import React from "react";
import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Christopher Galea",
  description:
    "I'm Christopher Galea, a passionate full stack software developer proficient in both front-end and back-end development. \
    My focus primarily lies in web development, where I find joy in crafting seamless and engaging user experiences. \
    ",
  icons: {
    icon: "favicon.ico", // /public path
  },
  keywords: [
    "Full-Stack",
    "Developer",
    "Christopher Galea",
    "Back-end",
    "Front-end",
    "Web",
    "Software Engineer",
    "Malta",
  ],
  authors: [
    { name: "Christopher Galea", url: "https://christophergalea.com/" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
