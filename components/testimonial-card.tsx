"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { textVariant } from "@/lib/anims";

interface Props {
  testimonial: {
    id: number;
    img: string;
    name: string;
    message: string;
  };
}

export function TestimonialCard({ testimonial }: Props) {
  return (
    <div className="lg:w-1/3 w-full lg:pr-6" key={testimonial.id}>
      <motion.div
        variants={textVariant(0.3)}
        whileInView="show"
        initial="hidden"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        transition={{ duration: 0.4 }}
        className="w-full flex flex-col"
      >
        <Image
          src={testimonial.img}
          alt={`Image of ${testimonial.name}`}
          width={500}
          height={500}
          className="w-full sm:m-0 h-80 cursor-pointer object-cover "
        />
        <div className="mt-6 text-xl cursor-pointer hover:opacity-80 duration-200 font-medium">
          {testimonial.name}
        </div>
        <p className="mt-1 text-base text-gray-600">{testimonial.message}</p>
      </motion.div>
    </div>
  );
}

export default TestimonialCard;
