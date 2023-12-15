import type { Metadata } from "next";
import Navbar from "@/components/navbar";

import "./globals.css";
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
