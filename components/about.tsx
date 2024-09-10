"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
        Hey there! I’m a 
        <span className="font-medium">passionate software engineer</span> 
        with over {"8 years"} of experience in 
        <span className="font-medium">backend development</span> and {"5+ years"} of 
        dabbling in <span className="font-medium">frontend applications</span>. 
        My coding journey started in {"2017"}, shortly after earning my 
        <span className="font-medium">BS in Information Technology</span> in {"2016"}.

        While most of my focus has been on 
        <span className="font-medium">backend systems</span>—building 
        <span className="font-medium">efficient, reliable, and scalable solutions</span>
        —I've also enjoyed taking on <span className="font-medium">frontend challenges</span>, 
        especially when crafting user-friendly web applications. Lately, 
        I’ve been expanding my skills with <span className="font-medium">React, Next.js, 
        and TypeScript</span>, pushing myself to grow as a 
        <span className="italic">full-stack developer</span>.

        I love solving <span className="font-medium">tough problems</span>, 
        finding {"cost-effective solutions"}, and writing code that’s 
        <span className="font-medium">clean, testable, and ready for production</span>. 
        With a strong understanding of 
        <span className="font-medium">Docker orchestration</span> and 
        <span className="font-medium">cloud environments</span>, 
        I’m always eager to deliver <span className="underline">top-quality results</span> 
        for any project I take on.

        In my spare time, I’m always 
        <span className="font-medium">learning something new</span>—especially when 
        it comes to frontend technologies and the latest in software development. Let’s 
        <span className="font-medium">create something amazing together!</span>
      </p>
    </motion.section>
  );
}
