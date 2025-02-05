import {
  SiGithub,
  SiCplusplus,
  SiVercel,
  SiNetlify,
  SiCanva,
  SiMysql,
  SiDjango,
  SiLaravel,
  SiFigma,
  SiHtml5,
  SiCss3,
  SiFlutter,
  SiXamarin,
  SiNativescript,
  SiReact,
} from "react-icons/si";

import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

import JavascriptSvg from "@/public/icons/javascript.svg";

import PythonSvg from "@/public/icons/python.svg";

// Libraries

// Backend
import NodejsSvg from "@/public/icons/nodejs.svg";

// Database and ORMS
import MongoDBSvg from "@/public/icons/mongodb.svg";

// Tools and Tech
import GitSvg from "@/public/icons/git.svg";

import AeSvg from "@/public/icons/ae.svg";
import PsSvg from "@/public/icons/ps.svg";
import LrSvg from "@/public/icons/lr.svg";
import fbSvg from "@/public/icons/firebase.svg";
import codeSvg from "@/public/icons/vscode2.svg";
import awsSvg from "@/public/icons/aws2.svg";
import dartSvg from "@/public/icons/dart.svg";
import kotlinSvg from "@/public/icons/kotlin.svg";
import { BiLogoJava } from "react-icons/bi";
export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "Dart",
        icon: dartSvg,
      },
      {
        name: "Kotlin",
        icon: kotlinSvg,
      },
      {
        name: "Java",
        icon: BiLogoJava,
      },
      {
        name: "Html",
        icon: SiHtml5,
      },
      {
        name: "Css",
        icon: SiCss3,
      },
      {
        name: "Javascript",
        icon: JavascriptSvg,
      },
      {
        name: "Python",
        icon: PythonSvg,
      },
      {
        name: "C++",
        icon: SiCplusplus,
      },
    ],
  },
  {
    sectionName: "Libraries and Frameworks",
    skills: [
      {
        name: "Flutter",
        icon: SiFlutter,
      },
      {
        name: "Xamarin",
        icon: SiXamarin,
      },
      {
        name: "Native Script",
        icon: SiNativescript,
      },
      {
        name: "React Native",
        icon: SiReact,
      },
    ],
  },
  {
    sectionName: "Backend",
    skills: [
      {
        name: "Nodejs",
        icon: NodejsSvg,
      },
      {
        name: "Laravel",
        icon: SiLaravel,
      },
      {
        name: "Django",
        icon: SiDjango,
      },
    ],
  },
  {
    sectionName: "Databases",
    skills: [
      {
        name: "MongoDB",
        icon: MongoDBSvg,
      },
      {
        name: "AWS",
        icon: awsSvg,
      },

      {
        name: "Firebase",
        icon: fbSvg,
      },
      {
        name: "MySql",
        icon: SiMysql,
      },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      {
        name: "Github",
        icon: SiGithub,
      },
      {
        name: "Netlify",
        icon: SiNetlify,
      },
      {
        name: "Git",
        icon: GitSvg,
      },
      {
        name: "VsCode",
        icon: codeSvg,
      },
      {
        name: "Vercel",
        icon: SiVercel,
      },
    ],
  },
  {
    sectionName: "Creativity Tools",
    skills: [
      {
        name: "After Effects",
        icon: AeSvg,
      },
      {
        name: "Figma",
        icon: SiFigma,
      },
      {
        name: "Photoshop",
        icon: PsSvg,
      },
      {
        name: "Lightroom",
        icon: LrSvg,
      },
      {
        name: "Canva",
        icon: SiCanva,
      },
    ],
  },
];
