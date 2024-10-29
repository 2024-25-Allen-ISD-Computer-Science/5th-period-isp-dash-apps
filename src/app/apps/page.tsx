import localFont from "next/font/local";
import AppCard from "../components/appCard";
import type { Metadata } from "next";
const RubikBold = localFont({
  src: "../fonts/Rubik-Bold.ttf",
  variable: "--font-rubik-bold",
});
export const metadata: Metadata = {
  title: "Web Applications and Software",
  description: "Website for the Dash suite of software and web based applications.",
};

export default function AppsPage() {
    return (
      <>
      <div className={`${RubikBold.className} container text-40px`}>SOFTWARE AND WEB APPLICATIONS</div>
      <AppCard/>
      </>
    );
  }