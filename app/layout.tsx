import type { Metadata } from "next";
import { type ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Théo Libert",
  description: "Personal website of Théo Libert",
};

type LayoutProps = { children: ReactNode };

export default function RootLayout(props: LayoutProps) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="mx-auto w-full max-w-3xl flex-1 p-4 sm:p-8">
          {props.children}
        </main>
        <Footer />
      </body>
    </html>
  );
}