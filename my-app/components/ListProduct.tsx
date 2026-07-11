"use client";

import Image from "next/image";
import AddRemoveWishlist from "./AddRemoveWishlist";
import { ProductType } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import { string } from "zod";

type Props = {
  keyword: string;
};

export default function ListProduct({ keyword }: Props) {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);

  async function get() {
    try {
      const data = await fetch(
        `http://localhost:3000/api/products?q=${encodeURIComponent(keyword)}`,
      );

      const products: ProductType[] = await data.json();
      setProducts(products);

      const wishlistResponse = await fetch("/api/wishlist");

      if (wishlistResponse.ok) {
        const wishlistData = await wishlistResponse.json();

        const wishlistProductIds = wishlistData.map(
          (item: { productId: string }) => item.productId,
        );

        setWishlist(wishlistProductIds);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleAddWishlist(productId: string) {
    setWishlist((currentWishlist) => [...currentWishlist, productId]);
  }

  useEffect(() => {
    get();
  }, [keyword]);

  return (
    <section className="bg-white px-8 py-10">
      <div className="grid grid-cols-5 gap-6">
        {products.map((product) => {
          const isWishlist = wishlist.includes(product._id);
          // console.log(product._id, typeof product._id, 'iniimis');

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
                    product.images[0] ||
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
                  onToggleWishlist={handleAddWishlist}
                />
              </div>

              <div className="mt-4 text-center">
                <h3 className="min-h-15 text-xl text-gray-600">
                  {product.name}
                </h3>

                {/* PRICE */}
                <div className="mt-2 flex items-center justify-center gap-2">
                  <span className={`text-xl`}>{product.price}</span>

                  {product.originalPrice && (
                    <span className="text-base text-gray-400 line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>

                {/* REVIEWS */}
                {product.reviews && (
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <div className="flex items-center gap-2">
                      <span>{product.rating.toFixed(1)}</span>

                      <span className="text-yellow-400">
                        {"★".repeat(Math.round(product.rating))}
                        {"☆".repeat(5 - Math.round(product.rating))}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
