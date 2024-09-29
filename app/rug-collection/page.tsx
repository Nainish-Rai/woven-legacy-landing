"use client";
import React from "react";
import { motion } from "framer-motion";
import { rugCollection } from "@/rugCollection";
import ProductCard from "@/components/product-card";
function RugCollection() {
  return (
    <div className="w-full bg-stone-100 mx-auto">
      <div className=" mx-auto px-2 pt-8 sm:px-6 lg:px-8">
        {rugCollection.collections.map((collection) => (
          <div key={collection.name} className="mt-8 lg:mt-16">
            <h1 className="text-3xl font-bold mb-4  alternate-font pl-8">
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
