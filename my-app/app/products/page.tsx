"use client";

import ListProduct from "@/components/ListProduct";
import SearchBar from "@/components/Search";

export default function Product() {
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
      <SearchBar />

      {/* PRODUCT COMPONENT */}
      <div className="mt-10">
        <ListProduct />
      </div>
    </main>
  );
}
