import React from "react";
import { Mail } from "lucide-react";

import siteMetadata, { defaultAuthor } from "@/lib/metadata";
import { CopyButton } from "@/components/copy-button";
import { Signature } from "@/components/signature";
import { SocialButton } from "@/components/social-button";

const Footer = () => {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col items-center gap-6 border-t py-6 pb-28 sm:pb-6">
      <Signature />
      <div className="container flex flex-col items-center justify-between space-y-5 text-center lg:flex-row lg:space-y-0 lg:text-left">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0 lg:order-2">
          <div className="flex flex-row flex-wrap justify-center space-x-2 text-sm text-muted-foreground">
            {defaultAuthor.socialProfiles.map((platform) => (
              <SocialButton
                key={platform.name}
                variant="ghost"
                size="icon"
                className="hover:text-foreground"
                platform={platform}
              />
            ))}
            <CopyButton size="icon" variant="ghost" className="hover:text-foreground" copyText={defaultAuthor.email}>
              <Mail />
              <span className="sr-only">Email address</span>
            </CopyButton>
          </div>
        </div>
        <div className="flex flex-col gap-4 px-8 md:gap-2 md:px-0 lg:order-1">
          <p className="text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Built by {defaultAuthor.name}. &nbsp;
            <a
              href={defaultAuthor.socialProfiles.find((platform) => platform.name === "x")?.link}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              {defaultAuthor.handle}
            </a>
          </p>
          <p className="text-sm text-muted-foreground md:text-left">
            Source code available on{" "}
            <a
              href={siteMetadata.siteRepo}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
