import { ChevronDown } from "lucide-react";

export default function NavItem({
  title,
}: {
  title: string;
}) {
  return (
    <button className="flex items-center gap-1 text-sm font-semibold uppercase tracking-wide text-abu transition hover:border-b border-abu pb-2">
      {title}

      <ChevronDown size={15} />
    </button> 
  );
}