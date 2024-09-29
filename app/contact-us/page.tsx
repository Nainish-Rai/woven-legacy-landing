"use client";
import { motion } from "framer-motion";
import ContactForm from "@/components/contact-us-form";
import React from "react";
import { textVariant } from "@/lib/anims";

type Props = {};

export default function ContactUsPage({}: Props) {
  return (
    <div className="w-full px-4 lg:px-16 flex flex-col py-6 lg:pb-32 items-center justify-center mx-auto max-w-7xl">
      <motion.h1
        initial="hidden"
        whileInView="show"
        variants={textVariant(0.2)}
        className="text-6xl font-semibold mt-8  alternate-font"
      >
        Contact Us
      </motion.h1>
      <motion.p
        initial="hidden"
        whileInView="show"
        variants={textVariant(0.3)}
        className="text-base my-4 mb-8 text-center w-full lg:w-1/2"
      >
        If you have any questions or would like to get in touch with us, please
        fill out the form below. We will get back to you as soon as we can.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="w-full max-w-7xl"
      >
        <ContactForm />
      </motion.div>
    </div>
  );
}
