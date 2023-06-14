import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Social Links",
    description: "My social profiles, courses, and downloads",
  };
}

export default function SocialLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
