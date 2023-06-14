import Link from "next/link";

import { defaultAuthor } from "@/lib/metadata";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CommandDialogComponent } from "@/components/command-dialog";
import Footer from "@/components/footer";
import { ModeToggle } from "@/components/mode-toggle";
import { Navbar } from "@/components/navbar";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="">
      <header className="mx-auto mt-4 h-16 w-full max-w-6xl px-4 lg:px-0">
        <div className="container flex items-center justify-between rounded-lg border border-black/40 bg-white/30 bg-clip-padding px-4 py-2 shadow-md backdrop-blur-sm dark:border-white dark:bg-black/30 dark:text-white">
          <Avatar asChild>
            <Link href="/">
              <AvatarImage className="rounded-full border border-black hover:opacity-60" src="/avatar.png" />
              <AvatarFallback>{defaultAuthor.name}</AvatarFallback>
            </Link>
          </Avatar>
          <nav className="ml-auto space-x-6 text-sm font-medium">
            <Navbar />
          </nav>
          <CommandDialogComponent />
          <ModeToggle />
        </div>
      </header>
      <div className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"></div>
      <main>{children}</main>
      <Footer />
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-amber-200 to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}
