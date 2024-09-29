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
import { AboutFamily } from "./(homepage)/FamilyAbout";

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
      <Section className="flex   justify-center">
        <FeaturedCollection />
      </Section>
      <Section className="flex bg-stone-100  justify-center">
        <NumbersSection />
      </Section>
      <ZoomParallax />

      <Section className="flex bg-stone-100 justify-center">
        <Testimonials />
      </Section>
      <Section className="flex  justify-center">
        <AboutFamily />
      </Section>
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
          <span className="alternate-font">Step</span> into{" "}
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
        Where centuries of craftsmanship intertwine with contemporary elegance.
        Each handcrafted rug and carpet in our collection is a testament to the
        enduring legacy of skilled artisans, blending the richness of tradition
        with the grace of modern design.
      </motion.p>
      <hr />
    </article>
  );
};
