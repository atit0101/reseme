import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from 'next/image';
import Head from 'next/head';

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AK-DEV",
  description: "Welcome to my professional resume page!",
  openGraph: {
    url: "https://atit.site",
    type: "profile",
    title: "Hello Welcome to ... , My name Atit",
    description: "Welcome to my professional resume page!!",
    images: "https://atit.site/homepage.png"
    // determiner: 'the',
    // title: "AK-DEV",
    // description: "Welcome to my professional resume page!",
    // emails: "sunny20747@gmail.com",
    // phoneNumbers: ["+0937786806"],
    // siteName: "https://atit.site",
    // locale: "en_US",
    // alternateLocale: ["es_ES", "th_TH"],
    // images: [
    //   {
    //     url: "https://atit.site/homepage.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "image atit website"
    //   }
    // ],
    // countryName: "Thailand",
    // ttl: 3600
  },

  //   <meta property="og:url"                content="https://contentmastery.io/on-page-seo/" />
  // <meta property="og:type"               content="article" />
  // <meta property="og:title"              content="On-Page SEO คืออะไร พร้อมแนวทางปฏิบัติที่ดีที่สุดเพื่อติดหน้าแรก Google" />
  // <meta property="og:description"        content="On-Page SEO คือการปรับแต่งหน้าเว็บของเราให้ optimize หรือดีต่อ Google Search เป็นสิ่งที่เราสามารถควบคุมได้โดยตรง โดยส่วนใหญ่แล้วจะเกี่ยวข้องกับการเขียนและปรับคอนเทนต์บนหน้าเว็บไซต์ " />
  // <meta property="og:image"  
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
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
