import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mini HackerNews",
  description: "A simple little reader for HackerNews",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased p-4`}
      >
        <header className="w-full p-4 border-b-1 border-white">
          <Link href={"/"}>
            <span className="font-black">📖 Mini Hackernews</span>
          </Link>
        </header>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
