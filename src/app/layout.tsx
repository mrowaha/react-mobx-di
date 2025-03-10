import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import InjectorContextProvider from "@/lib/InjectorProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <InjectorContextProvider>
          {children}
        </InjectorContextProvider>
      </body>
    </html>
  );
}
