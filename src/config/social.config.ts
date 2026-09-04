import { HiOutlineMail } from "react-icons/hi";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import type { SocialLink, ResponsiveProp } from "../types/social.types";

export const getResponsive = <T>(
  val: ResponsiveProp<T>,
  isMobile: boolean,
): T => {
  if (
    typeof val === "object" &&
    val !== null &&
    ("desktop" in val || "mobile" in val)
  ) {
    const responsiveVal = val as { desktop: T; mobile: T };
    return isMobile ? responsiveVal.mobile : responsiveVal.desktop;
  }
  return val as T;
};

export const SOCIAL_CORE_CONFIG = {
  container: {
    translateX: { desktop: "-70%", mobile: "-50%" },
    translateY: { desktop: "-50%", mobile: "-50%" },
    marginTop: { desktop: "mt-10", mobile: "mt-6" },
  },
  nodeSize: {
    desktop: 44,
    mobile: 38,
  },
  iconSize: {
    desktop: 18,
    mobile: 16,
  },
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "YouTube",
    Icon: FaYoutube,
    href: "https://www.youtube.com/@prabhukiran161",
    orbit: {
      x: { desktop: -90, mobile: -60 },
      y: { desktop: -90, mobile: -65 },
    },
  },
  {
    name: "Instagram",
    Icon: FaInstagram,
    href: "https://www.instagram.com/prabhukiran_161",
    orbit: {
      x: { desktop: -90, mobile: -65 },
      y: { desktop: -160, mobile: -110 },
    },
  },
  {
    name: "X",
    Icon: FaXTwitter,
    href: "https://x.com/prabhukiran_161",
    orbit: {
      x: { desktop: -60, mobile: -45 },
      y: { desktop: -220, mobile: -150 },
    },
  },
  {
    name: "GitHub",
    Icon: FaGithub,
    href: "https://github.com/prabhukiran161",
    orbit: {
      x: { desktop: 10, mobile: 0 },
      y: { desktop: -250, mobile: -170 },
    },
  },
  {
    name: "LinkedIn",
    Icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/prabhukiran161",
    orbit: {
      x: { desktop: 80, mobile: 45 },
      y: { desktop: -220, mobile: -150 },
    },
  },
  {
    name: "Email",
    Icon: HiOutlineMail,
    href: "mailto:prabhukiran161@gmail.com",
    orbit: {
      x: { desktop: 110, mobile: 65 },
      y: { desktop: -160, mobile: -110 },
    },
  },
  {
    name: "WhatsApp",
    Icon: FaWhatsapp,
    href: "https://wa.me/qr/Q3JYMRFCUZATC1",
    orbit: {
      x: { desktop: 110, mobile: 60 },
      y: { desktop: -95, mobile: -65 },
    },
  },
];
