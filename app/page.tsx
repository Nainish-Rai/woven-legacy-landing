"use client";
import { Main, Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";
import HeroSection from "./(homepage)/HeroSection";
import NewAndFeatured from "./(homepage)/NewAndFeatured";
import ImageFiller from "./(homepage)/ImageFiller";
import { motion } from "framer-motion";
import FeaturedCollection from "./(homepage)/FeaturedCollection";
import NumbersSection from "./(homepage)/NumbersSection";
import Footer from "@/components/footer";
import ZoomParallax from "@/components/zoom-parallax";
import Testimonials from "./(homepage)/Testimonial";

export default function Home() {
  return (
    <Main>
      <HeroSection />
      <Section>
        <Container>
          <ExampleJsx />
        </Container>
      </Section>
      {/* <ImageFiller /> */}

      <Section className="flex bg-stone-100 justify-center">
        <NewAndFeatured />
      </Section>
      <Section className="flex  justify-center">
        <FeaturedCollection />
      </Section>
      <Section className="flex bg-stone-100  justify-center">
        <NumbersSection />
      </Section>
      <ZoomParallax />

      <Section className="flex bg-stone-100 justify-center">
        <Testimonials />
      </Section>

      <Footer />
    </Main>
  );
}

const ExampleJsx = () => {
  return (
    <article className="prose-m-none">
      <motion.h1
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", type: "tween" }}
        whileInView={{ opacity: 1 }}
      >
        <Balancer>
          Hello <span className="alternate-font"> World</span>, welcome to the{" "}
          <span className="alternate-font">Woven Legacy</span>
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
      >
        Welcome to Woven Legacy, where tradition meets artistry in the world of
        handcrafted rugs and carpets. Our showroom is dedicated to showcasing
        exquisite pieces that reflect the rich heritage of carpet weaving while
        embracing modern design sensibilities.
      </motion.p>
      <hr />
    </article>
  );
};
