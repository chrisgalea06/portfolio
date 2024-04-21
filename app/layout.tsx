import "./globals.css";
import { Inter } from "next/font/google";


export const metadata = {
  title: "Christopher Galea - Portfolio",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
  icons: {
    icon: "favicon.ico", // /public path
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
       
        {children}
        
      </body>
    </html>
  );
}
