"use client";

import { ProductType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AddRemoveWishlist from "./AddRemoveWishlist";

type Props = {
  products: ProductType[];
};

export default function FeaturedProductList({ products }: Props) {
  const [wishlist, setWishlist] = useState<string[]>([]);

  async function getWishlist() {
    try {
      const response = await fetch("/api/wishlist");

      if (!response.ok) {
        return;
      }

      const data = await response.json();

      const productIds = data.map(
        (item: { productId: number }) => item.productId,
      );

      setWishlist(productIds);
    } catch (error) {
      console.log(error);
    }
  }

  function handleToggleWishlist(productId: string) {
    setWishlist((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      }

      return [...prev, productId];
    });
  }

  useEffect(() => {
    getWishlist();
  }, []);

  return (
    <div className="grid grid-cols-5 gap-6 px-10">
      {products.map((product) => {
        const isWishlist = wishlist.includes(product._id);

        return (
          <Link
            href={`/products/${product.slug}`}
            key={product._id}
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

              <AddRemoveWishlist
                productId={product._id}
                isWishlist={isWishlist}
                onToggleWishlist={handleToggleWishlist}
              />
            </div>

            <div className="mt-2 text-center">
              <p className="text-sm line-clamp-1 text-gray-600">
                {product.name}
              </p>
              <div className="mt-2 flex items-center text-primary justify-center gap-2">
                <span className="text-lg">US$ {product.price}</span>

                {product.originalPrice && (
                  <span className="text-[14px] text-gray-400 line-through">
                    US$ {product.originalPrice}
                  </span>
                )}
              </div>

              {product.reviews > 0 && (
                <div className="mt-2 flex items-center justify-center gap-2">
                  <span className="text-[#fcc600] text-[12px]">
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
  );
}
