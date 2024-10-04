"use client";

import { textVariant } from "@/lib/anims";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dot } from "lucide-react";

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
      className="w-full lg:w-1/3 py-1 lg:p-4 lg:py-8 lg:px-1 "
    >
      <div className="w-full bg-white shadow-sm h-fit py-2 lg:p-2 lg:py-4 rounded   ">
        <div className=" flex flex-col flex-wrap items-center lg:flex-col    max-w-full w-full">
          <p className="text-base lg:text-lg text-center max-w-sm  alternate-font  font-semibold px-4  mb-2   ">
            {title}
          </p>
          {/* <Image
            src={images[0]}
            alt={title}
            width={500}
            height={500}
            className="w-full  p-1 h-full    rounded-xl"
          />
          <Image
            src={images[1]}
            alt={title}
            width={500}
            height={500}
            className="w-full  p-1 h-full  rounded-xl"
          /> */}
          <Carousel className="w-full h-fit  max-w-[85%] ">
            <CarouselContent className="p-0">
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <Card className="p-0 border-none">
                    <CardContent className="p-0 border-none sm:border-none outline-none">
                      <Image
                        src={image}
                        alt={title}
                        width={500}
                        height={500}
                        className="w-full   h-full max-h-[500px] min-h-[350px]  rounded-xl"
                      />
                    </CardContent>
                  </Card>
                  <div className="flex  justify-center mt-2">
                    <Dot
                      size={24}
                      fontSize={12}
                      className={` transtition duration-200      ${
                        index === 0 ? "opacity-80" : "opacity-20"
                      }`}
                    />
                    <Dot
                      className={`   ${
                        index === 1 ? "opacity-80" : "opacity-20"
                      }`}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* <CarouselPrevious /> */}
            {/* <CarouselNext /> */}
          </Carousel>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductCard;
