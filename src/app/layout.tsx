import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from 'next/image';

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AK-DEV",
  description: "Welcome to my professional resume page!",
  openGraph: {
    determiner: 'the',
    title: "AK-DEV",
    description: "Welcome to my professional resume page!",
    emails: "sunny20747@gmail.com",
    phoneNumbers: ["+0937786806"],
    siteName: "https://atit.site",
    locale: "en_US",
    alternateLocale: ["es_ES", "th_TH"],
    images: [
      {
        url: "https://atit.site/homepage.png",
        width: 1200,
        height: 630,
        alt: "image atit website"
      }
    ],
    url: "https://atit.site",
    countryName: "Thailand",
    ttl: 3600
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
