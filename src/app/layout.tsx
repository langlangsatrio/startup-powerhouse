import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { Manrope } from "next/font/google";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-dope",
});

export const metadata: Metadata = {
  title: "Startup Powerhouse",
  description: "Speedrunning MVP Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${manrope.variable} font-dope`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
