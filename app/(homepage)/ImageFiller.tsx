import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

type Props = {};

function ImageFiller({}: Props) {
  return (
    <div className="justify-center flex">
      <motion.div
        initial={{ width: 500, height: 400 }}
        whileInView={{ width: 2000, height: 800, animation: " ease-in-out " }}
        transition={{ duration: 1 }}
        className="img-container relative w-full h-[550px]"
      >
        <Image
          src={
            "https://images.pexels.com/photos/10409984/pexels-photo-10409984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          fill
          alt="example image"
        />
      </motion.div>
    </div>
  );
}

export default ImageFiller;
