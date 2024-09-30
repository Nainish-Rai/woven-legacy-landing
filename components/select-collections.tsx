"use client";
import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Section, Container } from "@/components/craft";
import { textVariant, textVariant2 } from "@/lib/anims";

import Balancer from "react-wrap-balancer";
import NewAndFeaturedCard from "@/components/new-and-featured-card";

const newAndFeaturedData = [
  {
    id: 1,
    title: "Rugs & Carpets",
    subtitle: "Rooted in tradition yet reimagined for today",
    description:
      "Our rugs and carpets are masterpieces of handwoven artistry. Crafted with precision and passion, each piece tells a story—capturing the essence of heritage while adding a timeless touch to modern interiors.",
    img: "/rugs.jpg",
  },
  // {
  //   id: 2,
  //   title: "Cushion Covers",
  //   subtitle:
  //     "With a fusion of traditional weaving techniques and contemporary aesthetics",
  //   description:
  //     "Our cushion covers are designed to be more than just accents. These pieces add depth and personality, enhancing your décor with a touch of heritage and flair.",
  //   img: "/cushion.jpg",
  // },
  {
    id: 3,
    title: "Throws & Fabrics",
    subtitle: "Immerse yourself in soft, intricate textures",
    description:
      "Our throws and fabrics, where luxury meets craftsmanship. These versatile pieces bring warmth and elegance, offering the perfect balance of comfort and style to elevate any living space.",
    img: "/throws.jpg",
  },
];

const SelectCollection = () => {
  return (
    <Section id="collections" className="w-full max-w-7xl px-2 lg:px-0">
      <motion.h1
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.25 }}
        transition={{ duration: 0.5, type: "tween" }}
        className=" text-4xl lg:text-5xl text-center font-bold "
      >
        <Balancer>
          <span className="alternate-font"> Select A Collection</span>{" "}
        </Balancer>
      </motion.h1>
      <div className="w-full flex-col mt-8 lg:flex-row justify-center flex">
        {newAndFeaturedData.map((item) => (
          <NewAndFeaturedCard item={item} key={item.id} />
        ))}
      </div>
    </Section>
  );
};

export default SelectCollection;
