import type { IconType } from "react-icons";
import {
  SiReact,
  SiNodedotjs,
  SiFlutter,
  SiFirebase,
  SiSolidity,
  SiPolygon,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

export type ProjectTech = {
  name: string;
  Icon: IconType;
  color?: string;
};

export type ProjectItem = {
  id: string;
  title: string;
  slug: string;
  category: "Web App" | "Mobile App" | "Blockchain" | "AI / ML";
  description: string;
  image: string;
  tech: {
    icons: ProjectTech[];
    extraCount?: number;
  };
  github: string;
  live: string;
  docs: string;
  featured?: boolean;
};

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "flowdash",
    title: "FlowDash",
    slug: "flowdash",
    category: "Web App",
    description: "Analytics dashboard to visualize real-time data and metrics.",
    image: "/images/projects/flowdash.png",
    tech: {
      icons: [
        { name: "React", Icon: SiReact, color: "#61DAFB" },
        { name: "Node.js", Icon: SiNodedotjs, color: "#539E43" },
      ],
      extraCount: 3,
    },
    github: "https://github.com/prabhukiran",
    live: "https://example.com/flowdash",
    docs: "https://example.com/flowdash/docs",
    featured: false,
  },
  {
    id: "taskflow",
    title: "TaskFlow",
    slug: "taskflow",
    category: "Mobile App",
    description: "Task management app to boost productivity and focus.",
    image: "/images/projects/taskflow.png",
    tech: {
      icons: [
        { name: "Flutter", Icon: SiFlutter, color: "#02569B" },
        { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
      ],
      extraCount: 2,
    },
    github: "https://github.com/prabhukiran",
    live: "https://example.com/taskflow",
    docs: "https://example.com/taskflow/docs",
    featured: true,
  },
  {
    id: "chainvote",
    title: "ChainVote",
    slug: "chainvote",
    category: "Blockchain",
    description: "Decentralized voting platform built on blockchain.",
    image: "/images/projects/chainvote.png",
    tech: {
      icons: [
        { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
        { name: "Polygon", Icon: SiPolygon, color: "#8247E5" },
      ],
      extraCount: 2,
    },
    github: "https://github.com/prabhukiran",
    live: "https://example.com/chainvote",
    docs: "https://example.com/chainvote/docs",
    featured: false,
  },
];
