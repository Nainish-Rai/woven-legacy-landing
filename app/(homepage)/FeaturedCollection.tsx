"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

function FeaturedCollection({}: Props) {
  return (
    <div className="w-full mt-5 max-w-7xl">
      <div className="w-full relative">
        <Image
          src="/featured.jpg"
          alt="example image"
          width={2560}
          className="w-full h-[70vh] brightness-[0.8] lg:h-auto "
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
            New & Featured
          </motion.h1>

          <div>
            <Link
              className=""
              target="_blank"
              href="https://forms.gle/TSLRBZMvwDDHpuyk8"
            >
              <button className="btn btn-primary text-white underline underline-offset-8 cursor-pointer hover:opacity-50 duration-500">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCollection;
