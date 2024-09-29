import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";

import "./globals.css";

import { Button } from "@/components/ui/button";
import { NavMenu } from "@/components/nav/nav-menu";
import { MobileNav } from "@/components/nav/mobile-nav";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Toaster } from "react-hot-toast";

import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import Footer from "@/components/footer";
import { Main } from "@/components/craft";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Woven Legacy",
  description: "Where tradition meets artistry",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head />
      <body
        className={cn("min-h-screen  font-sans antialiased", fontSans.variable)}
      >
        <Nav />
        {children}
        <Toaster />
        <Main>
          <Footer />
        </Main>
      </body>
    </html>
  );
}

const Nav = ({ className, children, id }: NavProps) => {
  return (
    <nav
      className={cn(
        "sticky z-50 top-0 shadow-lg bg-background",
        "border-b",
        className
      )}
      id={id}
    >
      <div
        id="nav-container"
        className="max-w-screen-2xl mx-auto py-4 px-6 sm:px-8 flex justify-between items-center"
      >
        <Link
          className="hover:opacity-75 transition-all flex gap-2 items-center"
          href="/"
        >
          <h2 className="alternate-font text-xl font-bold">Woven Legacy</h2>
        </Link>
        {children}
        <div className="flex items-center -ml-4 gap-2">
          <NavMenu />
          {/* <ThemeToggle /> */}

          <MobileNav />
        </div>
        <Button asChild className="hidden rounded-none sm:flex">
          <Link href="/contact-us">Contact Us</Link>
        </Button>
      </div>
    </nav>
  );
};
