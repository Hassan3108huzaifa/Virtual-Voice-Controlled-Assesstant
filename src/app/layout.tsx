import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Importing the fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const jerseyFont = localFont({
  src: "./fonts/Jersey25-Regular.ttf",
  variable: "--font-jersey",
  weight: "100 900",
});

const bebasNeue = localFont({
  src: "./fonts/BebasNeue-Regular.ttf",
  variable: "--font-bebas-neue",
});
const Kulim = localFont({
  src: "./fonts/KulimPark-Regular.ttf", 
  variable: "--font-kulim",
});

export const metadata: Metadata = {
  title: "Virtual Voice Assesstant ",
  description: "Hassan, A Virtual Voice Assesstant created by HassanRJ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jerseyFont.variable} ${bebasNeue.variable} ${Kulim.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
