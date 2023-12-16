import type { Metadata } from "next";
import { SpeedInsights } from '@vercel/speed-insights/next';

import "./globals.css";
import Navbar from "@/components/navbar";
import { monasansLight } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import Footer from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "Studio.",
  description: "Studio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(`${monasansLight.className}`)}>
        <Navbar />
        <div
          className="relative flex flex-auto overflow-hidden bg-white"
          style={{
            borderTopLeftRadius: "40px",
            borderTopRightRadius: "40px",
            transform: "none",
            transformOrigin: "50% 50% 0px",
          }}
        >
          <div
            className="relative isolate flex w-full flex-col"
            style={{
              transform: "none",
              transformOrigin: "50% 50% 0px",
            }}
          >
            {children}
            <Footer />
          </div>
        </div>
        <SpeedInsights />
      </body>
    </html>
  );
}
