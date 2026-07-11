"use client";

import { WishlistType } from "@/types";
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

  useEffect(() => {
    getWishlist();
  }, []);

  return (
    <main className="min-h-screen bg-white px-12 py-12">
      <h1 className="text-center text-6xl font-extrabold text-primary">
        Wishlist
      </h1>

      {wishlists.length === 0 ? (
        <div className="flex flex-col items-center pt-12">
          <p className="text-2xl text-gray-500">Your wishlist is empty</p>

          <Link
            href="/products"
            className="mt-4 rounded-xl bg-primary px-7 py-4 text-2xl text-white transition hover:opacity-80"
          >
            Discover more
          </Link>
        </div>
      ) : (
        <div className="mt-14 grid grid-cols-5 gap-6">
          {wishlists.map((wishlist) => {
            const product = wishlist.product;

            return (
              <Link
                href={`/products/${product.slug}`}
                key={wishlist._id}
                className="min-w-0"
              >
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src={
                      product.images?.[1] ||
                      product.images?.[0] ||
                      product.thumbnail
                    }
                    alt={product.name}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>

                <div className="mt-4 text-center">
                  <h3 className="min-h-15 text-xl text-gray-600">
                    {product.name}
                  </h3>

                  <div className="mt-2 flex items-center justify-center gap-2">
                    <span className="text-xl">{product.price}</span>

                    {product.originalPrice && (
                      <span className="text-base text-gray-400 line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>

                  {product.reviews > 0 && (
                    <div className="mt-4 flex items-center justify-center gap-2">
                      <span>{product.rating.toFixed(1)}</span>

                      <span className="text-yellow-400">
                        {"★".repeat(Math.round(product.rating))}
                        {"☆".repeat(5 - Math.round(product.rating))}
                      </span>
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </main>
  );
}
