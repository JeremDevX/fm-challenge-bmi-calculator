import { Inter } from "next/font/google";
import "./globals.scss";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  weight: ["600", "400", "300"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Body Mass Index CalculatorBMI Calculator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
