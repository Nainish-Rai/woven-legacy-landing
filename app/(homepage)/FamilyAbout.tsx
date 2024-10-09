"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

export const AboutFamily = () => {
  return (
    <article
      id="about"
      className=" lg:flex w-full max-w-7xl px-2 flex-col lg:flex-row flex lg:px-0 prose-m-none"
    >
      <div className="w-full flex flex-col justify-center lg:w-1/2 lg:p-16 p-4 pt-32">
        <motion.h1
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", type: "tween" }}
          whileInView={{ opacity: 1 }}
          className="text-4xl lg:text-5xl font-bold "
        >
          <Balancer>
            <span className="alternate-font">Family</span>{" "}
            <span className="alternate-font">History</span>
          </Balancer>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: "easeInOut",
            type: "tween",
          }}
          whileInView={{ opacity: 1 }}
          className="mt-6"
        >
          <span className="font-bold">Woven Legacy</span> is the embodiment of a
          journey that began with Sundeep Exports, a name synonymous with
          quality and heritage in the world of handcrafted textiles. For
          decades, the Jain family has been at the forefront of this art,
          preserving ancient weaving techniques passed down through generations.{" "}
          <span className="font-bold">Mr. Shreyansh Jain</span> , the principal
          founder of Woven Legacy, carries forward this legacy, blending it with
          a vision to embrace modernity. From the bustling looms of Sundeep
          Exports to the sophisticated elegance of Woven Legacy, our family has
          always believed in honoring the hands that create and the heritage
          that inspires. Each collection reflects our unwavering commitment to
          sustainability, craftsmanship, and a future where artistry and
          innovation coexist in harmony
        </motion.p>
      </div>
      <div className="lg:w-1/2 lg:p-16 ">
        <Image
          src="/family.jpg"
          alt="example image"
          width={900}
          className="w-full lg:h-auto brightness-150 "
          height={1080}
        />
      </div>
    </article>
  );
};
