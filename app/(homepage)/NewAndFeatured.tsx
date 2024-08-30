"use client";
import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Section, Container } from "@/components/craft";
import { textVariant, textVariant2 } from "@/lib/anims";

import Balancer from "react-wrap-balancer";
import NewAndFeaturedCard from "@/components/new-and-featured-card";

const newAndFeaturedData = [
  {
    id: 1,
    title: "Fine Arts Collection",
    subtitle: "World",
    img: "https://images.unsplash.com/photo-1608724552908-e1c141f631ac?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Collection of Art",
    subtitle: "World",
    img: "https://images.pexels.com/photos/10409984/pexels-photo-10409984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    title: "An Art Collection",
    subtitle: "World",
    img: "https://images.unsplash.com/photo-1683277814188-7a1f3c83c923?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const NewAndFeatured = () => {
  return (
    <Section className="w-full max-w-7xl px-2 lg:px-0">
      <motion.h1
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.25 }}
        transition={{ duration: 0.5, type: "tween" }}
        className=" text-4xl lg:text-5xl font-bold "
      >
        <Balancer>
          New <span className="alternate-font">and</span> Featured{" "}
        </Balancer>
      </motion.h1>
      <div className="w-full flex-col lg:flex-row flex">
        {newAndFeaturedData.map((item) => (
          <NewAndFeaturedCard item={item} key={item.id} />
        ))}
      </div>
    </Section>
  );
};

export default NewAndFeatured;
