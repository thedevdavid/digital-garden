import "./globals.css";

import { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import siteMetadata, { BASE_URL, defaultAuthor } from "@/lib/metadata";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@/components/analytics";
import { BackTopButton } from "@/components/back-to-top";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space",
  weight: ["400", "600", "700"],
});
const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: siteMetadata.title,
  description: siteMetadata.description,
  authors: [{ name: defaultAuthor.name, url: defaultAuthor.website }],
  alternates: {
    canonical: "./",
    types: {
      "application/rss+xml": `${BASE_URL}/feed.xml`,
    },
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-gradient-to-b from-slate-100 to-white text-slate-900 antialiased dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 dark:text-slate-50">
        <ThemeProvider attribute="class" defaultTheme={siteMetadata.defaultTheme} enableSystem>
          {children}
          <BackTopButton />
          <Toaster />
        </ThemeProvider>
      </body>
      <Analytics />
    </html>
  );
}
