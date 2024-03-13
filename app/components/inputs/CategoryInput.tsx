"use client";

import { IconType } from "react-icons";

interface CategoryInputProps {
  icon: IconType;
  label: string;
  selected?: boolean;
  onClick: (value: string) => void;
}

const CategoryInput: React.FC<CategoryInputProps> = ({
  icon: Icon,
  label,
  selected,
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`
    rounded-xl
    border-2
    p-5
    flex
    flex-col
    gap-2
    hover:border-slate-950
    transition
    cursor-pointer
    ${selected ? "border-slate-950" : "border-zinc-300"}
    `}
    >
      <Icon size={35} />
      <div className="font-semibold">{label}</div>
    </div>
  );
};

export default CategoryInput;
