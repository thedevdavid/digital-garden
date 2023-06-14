"use client";

import React from "react";
import Link from "next/link";
import { Github, Instagram, Linkedin, Mail, Twitter, Youtube } from "lucide-react";

import siteMetadata, { defaultAuthor } from "@/lib/metadata";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Signature } from "@/components/signature";

const Footer = () => {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col items-center gap-6 border-t py-6">
      <Signature />
      <div className="container flex flex-col items-center justify-between space-y-5 text-center lg:flex-row lg:space-y-0 lg:text-left">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0 lg:order-2">
          <div className="flex flex-row space-x-2 text-sm text-muted-foreground">
            <Link href={defaultAuthor.social.twitter} target="_blank">
              <Twitter className="h-5 w-5 hover:text-foreground" />
              <span className="sr-only">Go to my Twitter profile</span>
            </Link>
            <Link href={defaultAuthor.social.youtube} target="_blank">
              <Youtube className="h-5 w-5 hover:text-foreground" />
              <span className="sr-only">Go to my Youtube channel</span>
            </Link>
            <Link href={defaultAuthor.social.github} target="_blank">
              <Github className="h-5 w-5 hover:text-foreground" />
              <span className="sr-only">Go to my Github profile</span>
            </Link>
            <Link href={defaultAuthor.social.instagram} target="_blank">
              <Instagram className="h-5 w-5 hover:text-foreground" />
              <span className="sr-only">Go to my Instagram profile</span>
            </Link>
            <Link href={defaultAuthor.social.linkedin} target="_blank">
              <Linkedin className="h-5 w-5 hover:text-foreground" />
              <span className="sr-only">Go to my LinkedIn profile</span>
            </Link>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  className="m-0 h-5 w-5 items-start p-0"
                  onClick={() => navigator.clipboard.writeText(defaultAuthor.email)}
                >
                  <Mail className="hover:text-foreground" />
                  <span className="sr-only">Copy email address</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent>Email copied!</PopoverContent>
            </Popover>
          </div>
        </div>
        <div className="flex flex-col gap-4 px-8 md:gap-2 md:px-0 lg:order-1">
          <p className="text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Built by {defaultAuthor.name}. &nbsp;
            <a
              href={defaultAuthor.social.twitter}
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
