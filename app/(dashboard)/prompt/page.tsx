"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  prompt: z.string().min(2).max(50),
});

import Wrapper from "@/components/shared/wrapper";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { HeartFilledIcon } from "@radix-ui/react-icons";

export default function PromptPage() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="flex flex-1">
      <Wrapper className="flex flex-col items-center text-center py-16 md:py-20 relative">
        <div className="relative w-full items-center justify-center flex flex-col mt-10 mb-20">
          <span className="font-black text-primary absolute -top-[160px] text-[200px] opacity-[0.25] select-none">
            PROMPT
          </span>
        </div>

        <div className="my-20 flex items-center justify-between w-full">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full max-w-[460px] flex flex-col items-end">
              <FormField
                control={form.control}
                name="prompt"
                render={({ field }) => (
                  <FormItem className="mb-6 w-full">
                    <FormLabel>Prompt</FormLabel>
                    <FormControl className="w-full h-[242px]">
                      <Textarea
                        placeholder="shadcn"
                        className="resize-none text-lg"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-max" variant="outline">
                Generate NFT
              </Button>
            </form>
          </Form>

          <div className="flex flex-col items-center gap-4">
            <div className="w-[563px] h-[513px]">
              <Image
                src="/svg/placeholder.svg"
                alt="placeholder"
                width={563}
                height={513}
                className="w-full h-full object-cover"
              />
            </div>

            <Button className="w-max">
              <HeartFilledIcon className="mr-2 w-4 h-4" /> Mint
            </Button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
