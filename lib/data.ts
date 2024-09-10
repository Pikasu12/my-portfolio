import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Jr Programmer",
    location: "Ortigas, Pasig",
    description:
      "At Metro Oil Subic Inc., I improved an existing web application for tracking and analyzing data. I worked with ASP.NET and VB, focusing on user-friendly design and efficient deployment.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2017 - August 2018"
  },
  {
    title: "Software Development Engineer",
    location: "Quezon City",
    description:
      "At Nokia, I managed the entire development cycle, from coding with best practices to maintaining program availability in production. I focused on performance and automation improvements.",
    icon: React.createElement(CgWorkAlt),
    date: "August 2018 - June 2020"
  },
  {
    title: "Software Engineer",
    location: "BGC, Taguig",
    description:
      "At DTN Philippines Inc., I built and maintained data-driven applications using Python in AWS. I improved team practices and developed backend and frontend applications from scratch to production.",
    icon: React.createElement(CgWorkAlt),
    date: "October 2020 - August 2023"
  },
  {
    title: "Senior Data Engineer",
    location: "Ortigas, Pasig City",
    description:
      "At ZZ Connect Inc., I maintain and develop custom data pipelines, integrations, and APIs for various data products. I focus on architecture and system design to ensure high availability and throughput.",
    icon: React.createElement(CgWorkAlt),
    date: "August 2023 - Present"
  },
] as const;

export const projectsData = [
  // {
  //   title: "CorpComment",
  //   description:
  //     "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
  //   tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
  //   imageUrl: corpcommentImg,
  // },
  // {
  //   title: "rmtDev",
  //   description:
  //     "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
  //   tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
  //   imageUrl: rmtdevImg,
  // },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Github",
  "Gitlab",
  "Tailwind",
  "MongoDB",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "Kubernetes",
  "AWS",
] as const;
