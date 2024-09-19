"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { textVariant } from "@/lib/anims";

type Props = {
  item: {
    id: number;
    img: string;
    title: string;
    subtitle: string;
    description: string;
  };
};

function NewAndFeaturedCard({ item }: Props) {
  return (
    <div className="lg:w-1/3 w-full lg:pr-6" key={item.id}>
      <motion.div
        variants={textVariant(0.3)}
        whileInView="show"
        initial="hidden"
        whileHover={{ scale: 1.025 }}
        whileTap={{ scale: 0.99 }}
        transition={{ duration: 0.2 }}
        className="w-full flex flex-col "
      >
        <Image
          src={item.img}
          alt="example image"
          width={500}
          className="w-full sm:m-0 h-80 cursor-pointer object-cover"
          height={500}
        />
        <div className="mt-2 text-xl cursor-pointer hover:opacity-80 text-black duration-200  font-medium">
          {item.title}
        </div>
        <div className="text-sm mt-2">{item.description}</div>
      </motion.div>
    </div>
  );
}

export default NewAndFeaturedCard;
