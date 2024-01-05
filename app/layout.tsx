import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SIC - Master Type",
  description: "Training and challenge your typing skill with SIC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={inter.className}
        style={{ fontFamily: "JetBrains Mono" }}
      >
        <div className={`flex-col flex items-center bg-slate-800 p-5 h-screen`}>
          <div className="w-full flex flex-1 flex-col justify-between max-w-[960px]">
            <Header />
            <div className="flex-1 pt-8">{children}</div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
