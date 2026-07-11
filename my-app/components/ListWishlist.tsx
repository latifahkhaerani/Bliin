"use client";

import Image from "next/image";
import { WishlistType } from "@/types";

type Props = {
  wishlists: WishlistType[];
};

export default function ListWishlist({ wishlists }: Props) {
  return (
    <div className="grid grid-cols-4 gap-x-5 gap-y-10">
      {wishlists.map((wishlist) => {
        const product = wishlist.product;

        return (
          <div key={wishlist._id} className="text-center">
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src={product.thumbnail}
                alt={product.name}
                fill
                className="object-cover"
              />

              <button type="button" className="absolute right-4 top-4 text-3xl">
                ×
              </button>
            </div>

            <h2 className="mt-3 text-xl text-gray-500">{product.name}</h2>

            <p className="mt-2 text-gray-500">US$ {product.price.toFixed(2)}</p>

            <button
              type="button"
              className="mt-3 w-full rounded-xl bg-pink-400 py-3 text-xl text-white"
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}
