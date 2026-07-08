// "use client";

import Image from "next/image";
import AddRemoveWishlist from "./AddRemoveWishlist";
import { ProductType } from "@/types";
import Link from "next/link";

export default async function ListProduct() {
  const data = await fetch("http://localhost:3000/api/products");
  // console.log(data);

  const products: ProductType[] = await data.json();

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

                {/* {product.oldPrice && (
                  <span className="text-base text-gray-400 line-through">
                    {product.oldPrice}
                  </span>
                )} */}
              </div>

              {/* REVIEWS */}
              {/* {product.reviews && (
                <div className="mt-4 flex items-center justify-center gap-2">
                  <span className="text-lg text-yellow-400">★★★★☆</span>

                  <span className="text-sm text-gray-500">
                    {product.reviews} reviews
                  </span>
                </div>
              )} */}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
