import siteMetadata from "@/lib/metadata";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";
import { Navigation } from "@/components/navigation";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <a
        className="absolute left-0 top-0 z-[9999] m-3 block -translate-y-96 overflow-hidden bg-white p-3 text-2xl text-black transition focus:translate-y-0"
        href="#main-content"
        aria-label="Skip to Content"
      >
        Skip to Content
      </a>
      <Navigation />
      <div className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"></div>
      <main className={cn("mt-20", siteMetadata.activeAnnouncement && "mt-32 pt-28 md:pt-0")} id="main-content">
        {children}
      </main>
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
    </>
  );
}
