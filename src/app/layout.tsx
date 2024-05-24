import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.scss";
import Providers from "./pages/Providers";
const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rest Countries",
  description: "Flags and coins around the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
     <body className={inter.className}>
      <Providers> 
        <main>{children}</main>
        </Providers></body>
      
    </html>
  );
}
