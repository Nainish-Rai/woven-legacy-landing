"use client";
import React from "react";
import { motion } from "framer-motion";
import { throwCollection } from "@/throwCollection";
import ProductCard from "@/components/product-card";
import { textVariant } from "@/lib/anims";
function Throw() {
  return (
    <div className="w-full bg-stone-100 mx-auto">
      <div className=" mx-auto px-4 pt-8 sm:px-6 lg:px-8">
        <motion.h1
          initial="hidden"
          whileInView="show"
          variants={textVariant(0.2)}
          className="text-6xl w-full text-center font-semibold mt-8  alternate-font"
        >
          Throws Collections
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="show"
          variants={textVariant(0.3)}
          className="text-sm lg:text-base my-4 mb-8 mx-auto mt-6 text-center w-full lg:w-1/2"
        >
          Our throws collection is made with high-quality materials and
          handcrafted to ensure durability and longevity.
        </motion.p>
        {throwCollection.map((collection) => (
          <div key={collection.name} className="mt-16">
            <h1 className="text-3xl font-bold mb-4  alternate-font pl-8">
              {collection.name}
            </h1>
            <div className="flex flex-wrap w-full">
              {collection.products.map((product) => (
                <ProductCard
                  key={product.title}
                  title={product.title}
                  images={product.image}
                  type="throw"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Throw;
