"use client";
import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";
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

const formSchema = z.object({
  name_7: z.string(),
  name_6: z.string(),
  name_1: z.string(),
  name_2: z.string(),
  name_3: z.string(),
  name_4: z.string(),
  name_5: z.string(),
  name_8: z.string(),
});

export default function OrderForm() {
  // Insert constants here
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name_1: "",
      name_2: "",
      name_3: "",
      name_4: "",
      name_5: "",
      name_6: "",
      name_7: "",
      name_8: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    // Replace this URL with your actual Google Form URL
    const googleFormUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSdXYJ1eJaAj77sdhlEEs3ObknpwvfEMkRURNF3ixAMXWzn6xQ/formResponse";

    // Map your form fields to Google Form field names
    const formData = new FormData();
    formData.append("entry.1024004057", values.name_1); // Replace with your actual entry IDs
    formData.append("entry.1061594089", values.name_2); // Replace with your actual entry IDs
    formData.append("entry.168358721", values.name_3); // Replace with your actual entry IDs
    formData.append("entry.1042008841", values.name_4); // Replace with your actual entry IDs
    formData.append("entry.1623726119", values.name_5); // Replace with your actual entry IDs
    formData.append("entry.1245712618", values.name_6); // Replace with your actual entry IDs
    formData.append("entry.487654580", values.name_7); // Replace with your actual entry IDs
    formData.append("entry.1890817689", values.name_8); // Replace with your actual entry IDs

    console.log(formData);

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
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-full  mx-auto py-10"
      >
        <FormField
          control={form.control}
          name="name_7"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" required {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name_6"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact Information</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your contact information "
                  required
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name_1"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rug Size (Length x Width):</FormLabel>
              <FormControl>
                <Input placeholder=" Enter size  " {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name_2"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rug Material:</FormLabel>
              <FormControl>
                <Input placeholder="Enter material " {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name_3"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rug Color</FormLabel>
              <FormControl>
                <Input placeholder="Enter rug color" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name_4"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pattern or Design</FormLabel>
              <FormControl>
                <Input placeholder="Enter pattern or design" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name_5"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Specifications(optional)</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter additional specifications"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name_8"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Estimated Budget</FormLabel>
              <FormControl>
                <Input placeholder="Provide budget" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
