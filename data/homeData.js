import {
  FaMobileAlt,
  FaLaptopCode,
  FaPalette,
  FaCode,
  FaUniversalAccess,
  FaBullhorn,
} from "react-icons/fa";

export const skillData = [
  {
    flag: "g",
    skill: "HTML",
    description: "Semantic Code V5",
  },
  {
    flag: "g",
    skill: "CSS",
    description: "Style Sheets V3",
  },
  {
    flag: "b",
    skill: "ReactJs",
    description: "Javascript V16.8 ^",
  },
  {
    flag: "b",
    skill: "NextJs",
    description: "Javascript V12.0 ^",
  },
  {
    flag: "b",
    skill: "NodeJS",
    description: "Javascript V16.16 ^",
  },
  {
    flag: "b",
    skill: "Express",
    description: "Javascript V4.0",
  },
  {
    flag: "p",
    skill: "Prisma",
    description: "ORM V2.0",
  },
  {
    flag: "p",
    skill: "TypeORM",
    description: "ORM",
  },
  {
    flag: "o",
    skill: "AWS",
    description: "Cloud Services",
  },
  {
    flag: "o",
    skill: "Azure",
    description: "Cloud Services",
  },
];

export const education = [
  {
    id: 1,
    dateRange: "2018 - 2019",
    title: "My Computer Career",
    desc: "Received Linux Essentials LE-1 / MTA Security Fundamentals",
  },
  {
    id: 2,
    dateRange: "2019 - 2020",
    title: "Lambda School",
    desc: "Full Stack Web Development - HTML, CSS, Javascript, ReactJs, mySql, Node, Github, Slack, Zoom",
  },
  {
    id: 3,
    dateRange: "2020 - 2021",
    title: "Frontend Mentor",
    desc: "Full Stack Web Development - HTML, CSS, Javascript, ReactJs, MERN, Node, Github",
  },
  {
    id: 4,
    dateRange: "2021 - 2022",
    title: "www.acloudguru.com",
    desc: "AWS Solution Architect Associate - Storage, VPC, Cloud Networks, Cloud Security, Decoupling, Governance, Serverless",
  },
  {
    id: 5,
    dateRange: "2022 - 2022",
    title: "Autobell",
    desc: "Wrote Node scripts to make API calls and store data in MongoDb. Build internal reports app in NextJs using Prisma",
  },
];

export const experience = [
  {
    id: 1,
    dateRange: "2022 - 2022",
    linkTag: "/car-wash",
    title: "Car Wash",
    desc: "Internal report dashboard app concept for a car wash company. Auth through Azure and MSAL.",
  },
  {
    id: 2,
    dateRange: "2020 - current",
    linkTag: "/salt-and-tar",
    title: "Salt and Tar",
    desc: "Fan site and web app designed for a better experience watching and supporting a YouTube content creator.",
  },
  {
    id: 3,
    dateRange: "2020 - 2022",
    linkTag: "/hermits",
    title: "Hermit Plus",
    desc: "Web app that brings all the hermits together in one place. Think Disney plus for hermits. Enjoy like never before.",
  },
  {
    id: 4,
    dateRange: "2021 - 2022",
    linkTag: "/#experience",
    title: "Erudition",
    desc: "Cliff notes web app for learning AWS Solution Architect Associate certification. Quiz's, Practice Exams, and study notes to help learn and keep fresh with AWS services and resources.",
  },
  {
    id: 5,
    dateRange: "2021 - 2022",
    linkTag: "/#experience",
    title: "Nutrasite",
    desc: "MERN stack project adapted from an Udemy course. This is an online ecommerce concept that sells health products.",
  },
];

export const services = [
  {
    id: 1,
    icon: FaMobileAlt,
    title: "Responsive",
    desc: "Mobile first or desktop first, your site will look and respond great. Phone, tablet, or computer.",
  },
  {
    id: 2,
    icon: FaLaptopCode,
    title: "Development",
    desc: "Frontend, or backend. Built for you from the ground up. From design through development to production.",
  },
  {
    id: 3,
    icon: FaPalette,
    title: "Design",
    desc: "Figma! Clients can comment on live designs. Prototype! Get graphics in PNG or SVG formats!",
  },
  {
    id: 4,
    icon: FaCode,
    title: "Code",
    desc: "Code is yours! I use Github or Gitlab, follow industry standards and write clean code. Take it anywhere, it's yours.",
  },
  {
    id: 5,
    icon: FaUniversalAccess,
    title: "A11Y",
    desc: "Web for everyone, built with A11y in mind. Images are optimized, HTML is semantic, and built for everyone.",
  },
  {
    id: 6,
    icon: FaBullhorn,
    title: "SEO",
    desc: "Every site has meta and og tags for search engines and social networks to find and rank your site.",
  },
];

export const templateData = [
  {
    id: 1,
    imageUrl: "/images/portfolio/volvo.png",
    subText:
      "Volvo Electric - Learn Tailwind CSS and build your own version, or here is my code and example site for review.",
    tagOneUrl: "https://gitlab.com/Dev3027/volvo-electric",
    btnOneTxt: "Gitlab",
    tagTwoUrl:
      "https://www.udemy.com/share/105Pgi3@fLJeowilVIMdBKpV5OSB5nOt_sH-KY_TdbCYHh0fP8LBrtG_Js-JFZUQRQUb_Ks4/",
    btnTwoTxt: "Learn",
    tagThreeUrl: "https://dev3027.gitlab.io/volvo-electric/",
    btnThreeTxt: "Site",
  },
  {
    id: 2,
    imageUrl: "/images/portfolio/kate.png",
    subText:
      "Kathryn ran for a SC senate seat at the start of the pandemic. I love the site. Here is my code and example site for review.",
    tagOneUrl: "https://github.com/Developer3027/Kate_v2",
    btnOneTxt: "Github",
    tagTwoUrl: "#",
    btnTwoTxt: "no link",
    tagThreeUrl: "https://kate-v2.vercel.app#",
    btnThreeTxt: "Site",
  },
  {
    id: 3,
    imageUrl: "/images/portfolio/music-found.png",
    subText:
      "Brad Traversy project with my spin. Found this track while playing around in SoundCloud. Not my typical genre, but after I added the static, just loved.",
    tagOneUrl: "https://github.com/Developer3027/hero-video",
    btnOneTxt: "Github",
    tagTwoUrl: "https://www.youtube.com/watch?v=8MgpE2DTTKA",
    btnTwoTxt: "Learn",
    tagThreeUrl: "https://cocky-cori-7cae1e.netlify.app",
    btnThreeTxt: "Site",
  },
];
