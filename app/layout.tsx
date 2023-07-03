import "./globals.css";

import { Inter, Space_Grotesk } from "next/font/google";

import siteMetadata from "@/lib/metadata";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@/components/analytics";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space",
  weight: ["400", "600", "700"],
});
const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-gradient-to-b from-slate-100 to-white text-slate-900 antialiased dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 dark:text-slate-50">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
      <Analytics />
    </html>
  );
}
