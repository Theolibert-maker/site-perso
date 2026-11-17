import type { Metadata } from "next";
import { type ReactNode } from "react";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/cv">CV</Link>
            </li>
          </ul>
        </nav>
        <main>{props.children}</main>
        <footer>
          <p>All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}