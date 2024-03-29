import { Copyright } from "@/components/Copyright";
import { Hero } from "@/components/Hero";
import { Profile } from "@/components/Profile";
import { SignIn } from "@/components/SignIn";
import {
  Bai_Jamjuree as BaiJamjuree,
  Roboto_Flex as Roboto,
} from "next/font/google";
import { cookies } from "next/headers";
import React from "react";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });
const baiJamJuree = BaiJamjuree({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-bai-jamjuree",
});

export const metadata = {
  title: "Time Capsule",
  description:
    "Uma cápsula do tempo construída com React, NextJS, Tailwind e Typescript ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuthenticated = cookies().has("token");
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamJuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        <main className="grid min-h-screen grid-cols-2">
          <div className="br-[url(../assets/bg-stars.svg)] relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-cover px-28 py-16">
            <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
            <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

            {isAuthenticated ? <Profile /> : <SignIn />}

            <Hero />
            <Copyright />
          </div>

          <div className="br-[url(../assets/bg-stars.svg)] flex max-h-screen flex-col overflow-y-scroll bg-cover">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
