"use client";

import ListWishlist from "@/components/ListWishlist";
import { WishlistType } from "@/types";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Wishlist() {
  const [wishlists, setWishlists] = useState<WishlistType[]>([]);

  async function getWishlist() {
    try {
      const response = await fetch("/api/wishlist");

      const data = await response.json();

      if (!response.ok) {
        throw data;
      }

      setWishlists(data);
    } catch (error) {
      console.log("ERROR WISHLIST:", error);
    }
  }

  async function handleRemoveWishlist(productId: string) {
    try {
      const response = await fetch("/api/wishlist", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId,
        }),
      });

      const data = await response.json();

      if (!response.ok) throw data;

      setWishlists((prev) =>
        prev.filter((item) => item.productId !== productId),
      );
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getWishlist();
  }, []);

  return (
    <main className="min-h-screen bg-white px-12 py-12">
      <h1 className="text-center text-5xl font-extrabold text-primary">
        Wishlist
      </h1>

      {wishlists.length === 0 ? (
        <div className="flex flex-col items-center pt-5">
          <p className="text-sm text-gray-500">Your wishlist is empty</p>

          <Link
            href="/products"
            className="mt-3 rounded-xl bg-primary px-4 py-2 text-[12px] text-white transition hover:opacity-80"
          >
            Discover more
          </Link>
        </div>
      ) : (
        <ListWishlist
          wishlists={wishlists}
          onRemoveWishlist={handleRemoveWishlist}
        />
      )}
    </main>
  );
}
