import React from "react";
import "./globals.css";
import { Metadata } from "next";
import ClientWrapper from "@/components/ClientWrapper";
import ErrorBoundary from "@/components/ErrorBoundary";

const siteUrl = "https://christophergalea.com";
const siteName = "Christopher Galea - Full Stack Developer";
const description =
  "Full Stack Software Developer specializing in web development. Proficient in both front-end and back-end technologies, creating seamless user experiences and robust applications.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | Christopher Galea`,
  },
  description,
  keywords: [
    "Full-Stack Developer",
    "Christopher Galea",
    "Software Engineer",
    "Web Developer",
    "Front-end Developer",
    "Back-end Developer",
    "Malta Developer",
    "React Developer",
    "Next.js Developer",
  ],
  authors: [{ name: "Christopher Galea", url: siteUrl }],
  creator: "Christopher Galea",
  publisher: "Christopher Galea",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: siteName,
    description,
    images: [
      {
        url: `${siteUrl}/images/christoper.png`,
        width: 1200,
        height: 630,
        alt: "Christopher Galea - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    images: [`${siteUrl}/images/christoper.png`],
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    // Add your verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body suppressHydrationWarning={true}>
        <ErrorBoundary>
          {children}
          <ClientWrapper />
        </ErrorBoundary>
      </body>
    </html>
  );
}
