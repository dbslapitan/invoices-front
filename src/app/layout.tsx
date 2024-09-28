import type { Metadata } from "next";
import "./globals.scss";
import { leagueSpartan } from "@/libs/fonts";
import Header from "@/ui/header/header";

export const metadata: Metadata = {
  title: "Invoices | Dirk Brandon Lapitan",
  description: "Invoicing App — A guru-level challenge from Frontend Mentor built using the PERN Stack with Typescript and NextJS for a React framework.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={leagueSpartan.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
