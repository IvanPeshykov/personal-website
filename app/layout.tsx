import type { Metadata } from "next";
import "./ui/globals.css";
import {geistSans, geistMono, spaceMono} from "@/app/ui/fonts";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";


export const metadata: Metadata = {
  title: "Ivan Peshykov",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceMono.className} ${geistSans.className} ${geistMono.className} antialiased flex flex-col h-screen justify-between`}
      >
      <div>
      <Header/>
      <main className='px-8 md:px-16 pt-4 pb-8'>
        {children}
      </main>
      </div>
      <Footer/>
      </body>
    </html>
  );
}
