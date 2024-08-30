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
    img: "https://images.unsplash.com/photo-1702310095333-dbb42b617453?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "James O'Brien",
    message:
      "The vintage-inspired rug I bought is not only beautiful but also incredibly durable. It's held up wonderfully in our high-traffic living room, and the colors are just as vibrant as the day we got it.",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1683277814188-7a1f3c83c923?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Aisha Patel",
    message:
      "I appreciate this company's commitment to ethical sourcing and sustainable practices. Knowing my beautiful rug was made responsibly makes me love it even more.",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1671576585636-d857cdf0f06c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "David Müller",
    message:
      "The custom rug service is fantastic! They worked with me to create a unique piece that perfectly fits my oddly-shaped room. The result is better than I could have imagined.",
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
