"use client";

import { textVariant } from "@/lib/anims";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  images: string[];
};

function ProductCard({ title, images }: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={textVariant(0.1)}
      viewport={{ once: true }}
      className="w-full lg:w-1/2 p-2 lg:p-4 lg:px-8 "
    >
      <div className="w-full bg-white shadow-sm p-2 rounded-xl  ">
        <div className=" flex   max-w-full w-full">
          <Image
            src={images[0]}
            alt={title}
            width={500}
            height={500}
            className="w-1/2 p-1 h-fit rounded-xl"
          />
          <Image
            src={images[1]}
            alt={title}
            width={500}
            height={500}
            className="w-1/2 p-1 h-fit rounded-xl"
          />
        </div>
        <p className="text-base  font-medium  mt-2   ">{title}</p>
      </div>
    </motion.div>
  );
}

export default ProductCard;
