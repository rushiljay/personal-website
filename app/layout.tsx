'use client';

import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dock } from "@/components/Dock";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check initial screen size
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    handleResize(); // Run on mount

    // Update on window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Rushil Jayant</title>
      </head>
      <body
        className={`${inter.className} flex items-start justify-between h-screen w-screen dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed inset-0 flex items-center justify-center">
            {!isMobile && <Sidebar />}
            <main className="grid w-full h-full">
              <ScrollArea>{children}</ScrollArea>
            </main>
            <Dock />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

