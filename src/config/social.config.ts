import { HiOutlineMail } from "react-icons/hi";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import type { SocialLink } from "../types/social.types";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "YouTube",
    Icon: FaYoutube,
    href: "https://youtube.com/",
    orbit: { x: -90, y: -90 },
  },
  {
    name: "Instagram",
    Icon: FaInstagram,
    href: "https://instagram.com/",
    orbit: { x: -90, y: -160 },
  },
  {
    name: "X",
    Icon: FaXTwitter,
    href: "https://x.com/",
    orbit: { x: -60, y: -220 },
  },
  {
    name: "GitHub",
    Icon: FaGithub,
    href: "https://github.com/",
    orbit: { x: 10, y: -250 },
  },
  {
    name: "LinkedIn",
    Icon: FaLinkedinIn,
    href: "https://linkedin.com/",
    orbit: { x: 80, y: -220 },
  },
  {
    name: "Email",
    Icon: HiOutlineMail,
    href: "mailto:hello@example.com",
    orbit: { x: 110, y: -160 },
  },
  {
    name: "WhatsApp",
    Icon: FaWhatsapp,
    href: "https://whatsapp.com/",
    orbit: { x: 110, y: -95 },
  },
];
