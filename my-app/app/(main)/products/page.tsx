"use client";

import ListProduct from "@/components/ListProduct";
import SearchBar from "@/components/Search";

import { useEffect, useState } from "react";

export default function Product() {
  const [keyword, setKeyword] = useState("");
  const [debouncedKeyword, setDebouncedKeyword] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedKeyword(keyword);
    }, 800);

    return () => clearTimeout(timer);
  }, [keyword]);

  return (
    <main className="min-h-screen bg-white px-12 py-6">
      {/* BREADCRUMB */}
      <div className="flex items-center gap-3 text-sm text-gray-500">
        <span>Home</span>
        <span className="text-xl text-gray-400">›</span>
        <span>Products</span>
      </div>

      {/* TITLE */}
      <h1 className="mt-14 text-center text-5xl font-extrabold text-primary">
        PRODUCTS
      </h1>

      {/* SEARCH */}
      <SearchBar keyword={keyword} setKeyword={setKeyword} />

      {/* PRODUCT COMPONENT */}
      <div className="mt-10">
        <ListProduct keyword={debouncedKeyword} />
      </div>
    </main>
  );
}
