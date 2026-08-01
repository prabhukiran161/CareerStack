import type { IconType } from "react-icons";
import {
  HiOutlineSquares2X2,
  HiOutlineDevicePhoneMobile,
  HiOutlineSquare3Stack3D,
  HiOutlineFunnel,
  HiOutlineArrowsUpDown,
} from "react-icons/hi2";

export type FilterOption = {
  id: string;
  label: string;
  Icon: IconType;
  options?: string[];
  widthClass?: string;
};

export const FILTERS: FilterOption[] = [
  {
    id: "category",
    label: "Category",
    Icon: HiOutlineSquares2X2,
    options: ["All Categories", "Web App", "Mobile App", "Blockchain", "AI / ML"],
    widthClass: "w-36",
  },
  {
    id: "type",
    label: "Type",
    Icon: HiOutlineDevicePhoneMobile,
    options: ["All Types", "Client Project", "Open Source", "Personal Project"],
    widthClass: "w-32",
  },
  {
    id: "stack",
    label: "Stack",
    Icon: HiOutlineSquare3Stack3D,
    options: ["All Stacks", "React", "TypeScript", "Node.js", "Flutter", "Solidity"],
    widthClass: "w-32",
  },
  {
    id: "filters",
    label: "Filters",
    Icon: HiOutlineFunnel,
    options: ["All", "Featured Only", "With Live Demo", "With Case Study"],
    widthClass: "w-36",
  },
  {
    id: "sort",
    label: "Sort by: Latest",
    Icon: HiOutlineArrowsUpDown,
    options: ["Latest", "Oldest", "Most Popular", "Alphabetical"],
    widthClass: "w-40",
  },
];
