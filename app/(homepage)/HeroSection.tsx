"use client";
import React from "react";
import dynamic from "next/dynamic";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { textVariant } from "@/lib/anims";
import Link from "next/link";

type Props = {};

function HeroSection({}: Props) {
  return (
    <div className="w-full h-screen  overflow-hidden m-0 p-0">
      <video
        autoPlay
        loop
        playsInline
        muted
        className="absolute brightness-[0.8] top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2"
      >
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute brightness-[0.8] top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2    bg-black/5"></div>
      <div className="absolute inset-0 flex items-center justify-center text-center text-white">
        <div className="flex flex-col items-center">
          <motion.h1
            variants={textVariant(0.3)}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.5, ease: "easeInOut", type: "tween" }}
            className="  alternate-font text-5xl lg:text-[96px] sm:text-[4rem] tracking-wider drop-shadow-2xl  font-semibold text-white mt-12 pt-12 !mb-0"
          >
            <Balancer>Woven Legacy</Balancer>
          </motion.h1>
          <Link
            className="no-underline sm:no-underline"
            href="https://forms.gle/TSLRBZMvwDDHpuyk8"
            target="_blank"
          >
            <motion.p
              initial={{ opacity: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.6,
                ease: "easeInOut",
                type: "tween",
              }}
              whileInView={{ opacity: 1 }}
              className=" cursor-pointer text-white  no-underline sm:no-underline hover:opacity-50 duration-200 w-fit pt-16 border-b-2  pb-2 border-0  p-0   underline-offset-8"
            >
              SHOP NOW
            </motion.p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
