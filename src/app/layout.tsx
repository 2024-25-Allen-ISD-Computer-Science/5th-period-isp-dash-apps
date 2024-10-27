import type { Metadata } from "next";
import localFont from "next/font/local";
import NavBar from "./components/navbar"
import "./globals.css";
const RubikRegular = localFont({
  src: "./fonts/Rubik-Regular.ttf",
  variable: "--font-rubik",
  weight: "100 900",
});
const RubikBold = localFont({
  src: "./fonts/Rubik-Bold.ttf",
  variable: "--font-rubik-bold",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Dash Applications",
  description: "Website for the Dash suite of software and web based applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={RubikRegular.className}>
       <NavBar/>
      </body>
    </html>
  );
}
