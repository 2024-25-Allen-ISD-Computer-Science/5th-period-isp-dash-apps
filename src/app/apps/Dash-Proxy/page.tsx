import localFont from "next/font/local";
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
      <div className={`${RubikBold.className} container text-40px`}>Dash Workerless Web Proxy</div>
      </>
    );
}