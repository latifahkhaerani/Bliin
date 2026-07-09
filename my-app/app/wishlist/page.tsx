"use client"

import Link from "next/link";

export default function Wishlist() {
  return (
    <main className="min-h-screen bg-white">
      <div className="flex flex-col items-center pt-12">
        <h1 className="text-6xl font-extrabold text-primary">Wishlist</h1>

        <p className="mt-10 text-2xl text-gray-500">Your wishlist is empty</p>

        <Link
          href="/"
          className="mt-4 rounded-xl bg-primary px-7 py-4 text-2xl text-white transition hover:opacity-80"
        >
          Discover more
        </Link>
      </div>
    </main>
  );
}
