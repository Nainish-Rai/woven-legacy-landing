"use client";
import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Section, Container } from "@/components/craft";
import { textVariant, textVariant2 } from "@/lib/anims";

import Balancer from "react-wrap-balancer";
import NewAndFeaturedCard from "@/components/new-and-featured-card";
import { Star } from "lucide-react";
import TestimonialCard from "@/components/testimonial-card";

const newAndFeaturedData = [
  {
    id: 4,
    img: "/t3.jpg",
    name: "Charlotte Blair, UK",
    message:
      "Beautiful Showroom generous Staff and great hospitality. One stop solution for all your needs",
  },
  {
    id: 5,
    img: "/t2.jpg",
    name: "Tetsuya Kamoda, T Corporation Japan",
    message:
      "Sandeep is a family to me. I love visiting him. He is very hardworking and we will continue to extend this good relation in years to come ",
  },
  {
    id: 6,
    img: "/t1.jpg",
    name: "Steve Robs - USA",
    message:
      "Loved the rugs. Even the kids like it. Thank you so much for the Tip-Top service as always.",
  },
];

const Testimonials = () => {
  return (
    <Section className="w-full max-w-7xl mt-16 px-2 lg:px-0">
      <div className="flex gap-2 mb-2">
        <Star fill="black" className="text-black" />
        <Star fill="black" className="text-black" />
        <Star fill="black" className="text-black" />
        <Star fill="black" className="text-black" />
        <Star fill="black" className="text-black" />
      </div>
      <motion.h1
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.25 }}
        transition={{ duration: 0.5, type: "tween" }}
        className=" text-4xl lg:text-5xl font-bold  "
      >
        <Balancer>
          Over 21,000+ <br /> 5{" "}
          <span className="alternate-font">Star Reviews</span>
        </Balancer>
      </motion.h1>
      <div className="w-full flex-col lg:flex-row flex">
        {newAndFeaturedData.map((item) => (
          <TestimonialCard testimonial={item} key={item.id} />
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
