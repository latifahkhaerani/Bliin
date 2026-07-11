"use client";
import { Search } from "lucide-react";

type Props = {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchBar({ keyword, setKeyword }: Props) {
  return (
    <div className="mx-auto mt-2 flex h-10 w-full max-w-xl items-center rounded-xl border border-gray-300 px-5">
      <Search className="mr-3 h-5 w-5 text-gray-400" />
      <input
        type="text"
        name="search"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search products by name or tag..."
        className="w-full bg-transparent text-sm text-gray-600 outline-none placeholder:text-gray-400"
      />
    </div>
  );
}
