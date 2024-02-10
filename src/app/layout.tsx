import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import MyNavbar from "@/components/MyNavbar";
import MyFooter from "@/components/MyFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechSynergy",
  description: "Innovate, Create, Elevate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/images/Logo.svg" />
      </head>
      <body className={inter.className}>
        <Providers>
          <MyNavbar />
          {children}
          <MyFooter />
        </Providers>
      </body>
    </html>
  );
}
