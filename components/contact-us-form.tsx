"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
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

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 5 characters.",
  }),
  address: z.string().min(5, {
    message: "Address must be at least 5 characters.",
  }),

  phone: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
});

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    // Replace this URL with your actual Google Form URL
    const googleFormUrl =
      "https://docs.google.com/forms/d/e/17IWrJFWy2xu4oMjgBlIN3_-yCc2gQxlZRsk1MJqS5js/formResponse";

    // Map your form fields to Google Form field names
    const formData = new FormData();
    formData.append("entry.1011783892", values.name); // Replace with your actual entry IDs
    formData.append("entry.220422147", values.email);
    formData.append("entry.597661191", values.message);

    fetch(googleFormUrl, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    })
      .then(() => {
        setIsSubmitting(false);
        form.reset();
        alert("Form submitted successfully!");
      })
      .catch((error) => {
        setIsSubmitting(false);
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
      });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
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
                <Input type="email" placeholder="Your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone no.</FormLabel>
              <FormControl>
                <Input placeholder=" Your phone number" {...field} />
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
                <Textarea placeholder="Your message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
