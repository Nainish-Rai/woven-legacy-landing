import { FC, useRef } from "react";
import Image from "next/image";

import { useScroll, useTransform, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { textVariant } from "@/lib/anims";
import Balancer from "react-wrap-balancer";

interface Props {
  classes?: string;
}

const ZoomParallax: FC<Props> = ({ classes }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale3 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: "/t2.jpg",
      scale: scale1,
      classes: "relative w-[25%] h-[25%]",
    },
    {
      src: "/q6.jpg",
      scale: scale2,
      classes: "relative top-[-30%] left-[5%] w-[35%] h-[30%]",
    },
    {
      src: "/q2.jpg",
      scale: scale3,
      classes: "relative top-[-29%] left-[-25%] w-[20%] h-[28%]",
    },
    {
      src: "/uq1.jpg",
      scale: scale2,
      classes: "relative left-[27.5%] w-[25%] h-[25%]",
    },
    {
      src: "/q7.jpg",
      scale: scale3,
      classes: "relative left-[-27.5%] w-[25%] h-[25%]",
    },
    {
      src: "/q5.jpg",
      scale: scale4,
      classes: "relative top-[27.5%] left-[5%] w-[20%] h-[25%]",
    },
    {
      src: "/t1.jpg",
      scale: scale5,
      classes: "relative top-[22.5%] left-[25%] w-[15%] h-[15%]",
    },
  ];

  return (
    <section
      ref={container}
      className={cn("relative h-[200vh] w-full mt-24 lg:mt-0", classes)}
    >
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.25 }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          delay: 0,
          type: "tween",
        }}
        className=" text-3xl w-full text-center sm:mt-48 sm:mb-0 font-bold "
      >
        <Balancer>
          Unmatched <span className="alternate-font">Quality</span>{" "}
        </Balancer>
      </motion.h1>
      <div className="sticky top-0 h-screen overflow-hidden">
        {pictures.map(({ src, scale, classes }, index) => {
          return (
            <motion.div
              key={index}
              style={{ scale }}
              className="absolute top-0 flex h-full w-full items-center justify-center"
            >
              <div className={classes}>
                <Image src={src} fill objectFit="cover" alt="image" />
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="h-[100vh] leading-[0]"></div>
      {/* <p>Continue your content here...</p> */}
    </section>
  );
};

export default ZoomParallax;
