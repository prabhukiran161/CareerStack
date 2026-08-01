import {
  HiOutlineArrowUpRight,
  HiOutlineDocumentText,
} from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";

type ActionButtonType = "live" | "github" | "docs";

type ActionButtonProps = {
  type: ActionButtonType;
  href: string;
  label?: string;
};

export const ActionButton = ({ type, href, label }: ActionButtonProps) => {
  const renderIcon = () => {
    switch (type) {
      case "live":
        return <HiOutlineArrowUpRight className="w-4 h-4" />;
      case "github":
        return <FaGithub className="w-4 h-4" />;
      case "docs":
        return <HiOutlineDocumentText className="w-4 h-4" />;
    }
  };

  const getTitle = () => {
    if (label) return label;
    switch (type) {
      case "live":
        return "Live Demo";
      case "github":
        return "Source Code";
      case "docs":
        return "Documentation / Case Study";
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={getTitle()}
      className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-brand-red hover:bg-brand-red/20 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200 active:scale-95 shadow-md"
    >
      {renderIcon()}
    </a>
  );
};
