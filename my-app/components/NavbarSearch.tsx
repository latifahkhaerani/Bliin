"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NavbarSearch() {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(`/products?q=${encodeURIComponent(keyword)}`);
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 px-4 py-2">
      <Search size={20} className="text-gray-400" />

      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search our store..."
        className="w-fit outline-none text-sm "
      />
    </form>
  );
}
