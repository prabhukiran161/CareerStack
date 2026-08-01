import {
  HiOutlineGlobeAlt,
  HiOutlineDevicePhoneMobile,
  HiOutlineCube,
  HiOutlineCpuChip,
} from "react-icons/hi2";

type CategoryBadgeProps = {
  category: "Web App" | "Mobile App" | "Blockchain" | "AI / ML";
};

export const CategoryBadge = ({ category }: CategoryBadgeProps) => {
  const getIcon = () => {
    switch (category) {
      case "Web App":
        return <HiOutlineGlobeAlt className="w-3.5 h-3.5 text-brand-red" />;
      case "Mobile App":
        return (
          <HiOutlineDevicePhoneMobile className="w-3.5 h-3.5 text-brand-red" />
        );
      case "Blockchain":
        return <HiOutlineCube className="w-3.5 h-3.5 text-brand-red" />;
      case "AI / ML":
        return <HiOutlineCpuChip className="w-3.5 h-3.5 text-brand-red" />;
      default:
        return null;
    }
  };

  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-300 shrink-0 select-none">
      {getIcon()}
      {category}
    </span>
  );
};
