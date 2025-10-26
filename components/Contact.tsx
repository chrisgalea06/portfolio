"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { ContactFormData } from "../lib/types";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Please enter your name.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(2, {
    message: "Please enter a subject.",
  }),
  message: z.string().min(2, {
    message: "Please enter a message.",
  }),
});

export default function Contact() {
  const [message, setMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormData) {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message");
      }

      setMessage(true);
      form.reset();
    } catch (error) {
      setError(
        "Failed to send message. Please try again or contact me directly."
      );
      // Log error for debugging in development only
      if (process.env.NODE_ENV === "development") {
        console.error("Contact form error:", error);
      }
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className="text-white pt-[90px] lg:pt-[130px] bg-black lg:bg-[#15140f] lg:mt-0 mt-[30px]">
      <div className="wrapper">
        <div
          className="responsive justify-between lg:gap-28 lg:items-end relative lg:px-16 pb-16
                before:content-[''] before:absolute before:w-full before:h-[70%] before:bg-black before:bottom-0 before:left-0 z-10"
        >
          <div className="relative">
            <div className="title text-[48px] lg:text-left text-center font-black mb-5">
              <h3>Lets Connect</h3>
            </div>
          </div>
          <div className="bg-white p-7 flex-1 text-black relative">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="btn" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
                {message && (
                  <p className="text-sm text-green-500">
                    Your message has been sent. Thank you!
                  </p>
                )}
                {error && <p className="text-sm text-red-500">{error}</p>}
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
