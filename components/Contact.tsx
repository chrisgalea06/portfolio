"use client";
import Image from "next/image";
import React, { useState } from "react";
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";

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

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    const sendNow = async () => {
      try {
        const data = {
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
        };
        const response = await axios.post(
          `${process.env.URL_API}/contacts`,
          {
            data,
          },
          {
            headers: {
              Authorization: "Bearer " + process.env.KEY_API_POST,
            },
          }
        );
        setMessage(true);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    sendNow();
  }
  return (
    <div className="text-white pt-[90px] lg:pt-[130px] bg-black lg:bg-[#15140f] lg:mt-0 mt-[30px]">
      <div className="wrapper">
        <div
          className="responsive justify-between lg:gap-28 lg:items-end relative lg:px-16 pb-16
                before:content-[''] before:absolute before:w-full before:h-[70%] before:bg-black before:bottom-0 before:left-0"
        >
          <div className="relative">
            <div className="title text-[48px] lg:text-left text-center font-black mb-5">
              <h3>Contact Us</h3>
            </div>
            <div className="relative">
              <div className="flex gap-6 my-7">
                <Image
                  src="/images/icon-mail.svg"
                  alt=""
                  width={36}
                  height={36}
                />
                <div className="relative">
                  <h6>Email:</h6>
                  <div>admin@christophergalea.com</div>
                </div>
              </div>
              <div className="flex gap-6 my-7">
                <Image
                  src="/images/icon-phone.svg"
                  alt=""
                  width={36}
                  height={36}
                />
                <div className="relative">
                  <h6>WhatsApp:</h6>
                  <div>+356 9909 7476</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-7 flex-1 text-black relative">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="lg:w-2/3 w-full space-y-6"
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
                <Button type="submit" className="btn">
                  Send Message
                </Button>
                {message && (
                  <p className="text-sm text-slate-500">
                    Your message has been sent. Thank you!
                  </p>
                )}
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
