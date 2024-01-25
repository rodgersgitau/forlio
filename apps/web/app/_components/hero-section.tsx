"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import { buttonVariants } from "@/components/ui/button";

import config from "@/lib/config";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 gap-8 lg:gap-10 lg:grid-cols-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="grid justify-center w-full gap-8 text-center lg:gap-10 lg:justify-start lg:col-span-6 lg:text-left"
      >
        <h1 className="text-2xl font-extrabold sm:text-4xl lg:text-6xl lg:leading-normal">
          <span className="block">{config.hero.title}</span>
          <TypeAnimation
            wrapper="span"
            speed={10}
            repeat={Infinity}
            className="block text-transparent bg-clip-text bg-gradient-to-r from-primary/60 to-secondary/60"
            sequence={config.hero.titleSequence}
          />
        </h1>
        <p className="text-base !leading-relaxed sm:text-lg lg:text-xl">
          {config.hero.description}
        </p>
        <div className="grid gap-8 sm:grid-cols-2">
          <Link
            href="/#contact"
            className={buttonVariants({
              size: "lg",
              className: "w-full rounded-full",
            })}
          >
            {config.hero.cta.primary}
          </Link>
          <Link
            href="/"
            className={buttonVariants({
              size: "lg",
              variant: "outline",
              className: "w-full rounded-full",
            })}
          >
            {config.hero.cta.other}
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center w-full lg:justify-end lg:col-span-6"
      >
        <div className="relative w-[250px] lg:w-[450px] rounded-full bg-background aspect-square">
          <Image
            fill
            alt="personal website"
            className="object-cover"
            src="/images/website.svg"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
