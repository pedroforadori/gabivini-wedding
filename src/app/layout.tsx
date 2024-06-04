import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefinFont = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gabi e Vini",
  description: "Site do casamento Gabi e Vini",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={josefinFont.className}>{children}</body>
    </html>
  );
}
