"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {};

function FeaturedCollection({}: Props) {
  return (
    <div className="w-full mt-5 max-w-7xl">
      <div className="w-full relative">
        <Image
          src="https://www.boydblue.com/cdn/shop/files/BoydArt_Bold_Lively_Web3.jpg?v=1722320164&width=2560"
          alt="example image"
          width={2560}
          className="w-full h-[70vh] lg:h-auto "
          height={1080}
        />
        <div className="absolute text-center text-white  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.p
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            whileInView={{ opacity: 1 }}
            className="text-xl "
          >
            {" "}
            RUG ART 24{" "}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
            whileInView={{ opacity: 1 }}
            className="text-white sm:text-[3.3rem] alternate-font"
          >
            Bold & Lively
          </motion.h1>

          <div>
            <button className="btn btn-primary underline underline-offset-8 cursor-pointer hover:opacity-50 duration-500">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCollection;
