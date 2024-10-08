"use client";
import React from "react";
import { motion } from "framer-motion";
import { rugCollection } from "@/rugCollection";
import ProductCard from "@/components/product-card";
import { textVariant } from "@/lib/anims";
function RugCollection() {
  return (
    <div className="w-full bg-stone-100 mx-auto">
      <div className=" mx-auto px-2 pt-8 sm:px-6 lg:px-8">
        <motion.h1
          initial="hidden"
          whileInView="show"
          variants={textVariant(0.2)}
          className="text-6xl text-center font-semibold mt-8  alternate-font"
        >
          Rugs Collections
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="show"
          variants={textVariant(0.3)}
          className="text-sm lg:text-base my-4 mb-8 mx-auto mt-6 text-center w-full lg:w-1/2"
        >
          We have a collection of rugs to choose from. Each rug is hand-woven
          with a unique design and pattern, making them a one-of-a-kind piece.
          Our rugs are made from high-quality wool and cotton, ensuring
          durability and longevity.
        </motion.p>
        {rugCollection.collections.map((collection) => (
          <div key={collection.name} className="mt-8 lg:mt-16">
            <h1 className="text-3xl font-bold mb-4 text-center lg:text-left  alternate-font pl-8">
              {collection.name}
            </h1>
            <div className="flex flex-wrap w-full">
              {collection.products.map((product) => (
                <ProductCard
                  key={product.title}
                  title={product.title}
                  images={product.image}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RugCollection;
