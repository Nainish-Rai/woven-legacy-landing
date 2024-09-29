import ContactForm from "@/components/contact-us-form";
import React from "react";

type Props = {};

export default function ContactUsPage({}: Props) {
  return (
    <div className="w-full px-16 flex flex-col items-center justify-center mx-auto max-w-7xl">
      <h1 className="text-6xl font-semibold mt-8  alternate-font">
        Contact Us
      </h1>
      <p className="text-base my-4 mb-8 text-center w-1/2">
        If you have any questions or would like to get in touch with us, please
        fill out the form below. We will get back to you as soon as we can.
      </p>
      <ContactForm />
    </div>
  );
}
