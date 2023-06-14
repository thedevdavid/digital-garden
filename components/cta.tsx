"use client";

import React from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import siteMetadata from "@/lib/metadata";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  email: z.string().email(),
});

const CTA = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // TODO: Newsletter subbscriptions
    toast({
      title: "In progress...",
      description: "I'm still working on this feature.",
      action: (
        <ToastAction altText="Go to Newsletter page" asChild>
          <Link href={siteMetadata.newsletterUrl}>Go to Newsletter page</Link>
        </ToastAction>
      ),
    });
    console.log(values);
  }
  return (
    <section className="relative isolate my-24 overflow-hidden rounded-lg bg-primary py-6 text-primary-foreground shadow-md">
      <div className="p-8 md:p-12">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-heading text-2xl font-bold md:text-3xl">I also write deep dives in email</h2>

          <p className="hidden text-muted-foreground sm:mt-4 sm:block">
            I write about coding, design, digital nomad life, and solopreneurship. Join over 1,000 other developers in
            getting better in business. Unsubscribe whenever.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="flex w-full gap-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input type="email" placeholder="anakin.skywalker@darksi.de" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" variant="secondary">
                  <Mail className="mr-2 h-4 w-4" /> Send me the emails
                </Button>
              </div>
            </form>
          </Form>
          <div className="mt-4 flex items-center justify-center">
            <Button asChild variant="ghost">
              <Link href={siteMetadata.newsletterUrl} target="_blank">
                Let me read it first <ArrowRight className="mr-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
        aria-hidden="true"
      >
        <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
        <defs>
          <radialGradient
            id="759c1415-0410-454c-8f7c-9a820de03641"
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(512 512) rotate(90) scale(512)"
          >
            <stop stopColor="#7775D6" />
            <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
          </radialGradient>
        </defs>
      </svg>
    </section>
  );
};

export default CTA;
