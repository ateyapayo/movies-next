"use client";

import "./globals.css";

import { Montserrat } from "@next/font/google";
import Navbar from "./Navbar";
import Head from "./head";
import Footer from "./Footer";

import { SearchWrapper } from "@/context/SearchContext";

const montserrat = Montserrat({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <Head />

      <body className={`${montserrat.className}`}>
        {" "}
        <SearchWrapper>
          <Navbar />
          {children}
          <Footer />
        </SearchWrapper>
      </body>
    </html>
  );
}
