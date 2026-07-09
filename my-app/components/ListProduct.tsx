"use client";

import Image from "next/image";
import AddRemoveWishlist from "./AddRemoveWishlist";
import { ProductType } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ListProduct() {
  const [products, setProducts] = useState<ProductType[]>([]);

  async function get() {
    try {
      const data = await fetch("http://localhost:3000/api/products");
      // console.log(data);

      const product: ProductType[] = await data.json();
      setProducts(product);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    get();
  }, []);

  return (
    <section className="bg-white px-8 py-10">
      <div className="grid grid-cols-5 gap-6">
        {products.map((product) => (
          <Link
            href={`/products/${product.slug}`}
            key={product._id}
            className="min-w-0"
          >
            {/* IMAGE */}
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src={
                  product.images?.[1] || product.images[0] || product.thumbnail
                }
                alt={product.name}
                fill
                sizes="100vw"
                className="object-cover"
              />

              {/* BADGE */}
              {/* {product.badge && (
                <span
                  className={`absolute left-3 top-3 rounded-xl px-4 py-2 text-base text-white ${
                    product.badge === "Sold Out" ? "bg-gray-700" : "bg-primary"
                  }`}
                >
                  {product.badge}
                </span>
              )} */}

              {/* ADD TO FAVORITE */}
              <AddRemoveWishlist />
            </div>

            {/* PRODUCT INFO */}
            <div className="mt-4 text-center">
              <h3 className="min-h-15 text-xl text-gray-600">{product.name}</h3>

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
        ))}
      </div>
    </section>
  );
}
