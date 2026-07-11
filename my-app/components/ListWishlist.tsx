"use client";

import { WishlistType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

type Props = {
  wishlists: WishlistType[];
  onRemoveWishlist: (productId: string) => void;
};

export default function ListWishlist({ wishlists, onRemoveWishlist }: Props) {
  return (
    <div className="grid grid-cols-5 gap-x-7 gap-y-10 mt-10">
      {wishlists.map((wishlist) => {
        const product = wishlist.product;

        return (
          <div key={wishlist._id} className="block min-w-0">
            {/* IMAGE */}
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#fafafa]">
              <button
                type="button"
                onClick={() => onRemoveWishlist(wishlist.productId)}
                className="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-md transition hover:scale-110 hover:bg-white"
              >
                <X size={16} className="text-gray-500" />
              </button>

              <Link href={`/products/${product.slug}`}>
                <Image
                  src={
                    product.images?.[1] ||
                    product.images?.[0] ||
                    product.thumbnail
                  }
                  alt={product.name}
                  fill
                  sizes="100vw"
                  className="object-cover transition duration-300 hover:scale-105"
                />
              </Link>
            </div>

            {/* INFO */}
            <div className="mt-3 text-center">
              <h3 className="mx-auto min-h-10 max-w-[95%] line-clamp-2 text-sm text-gray-600">
                {product.name}
              </h3>

              <div className=" flex items-center justify-center gap-2">
                <span className="text-lg font-medium text-primary">
                  US$ {product.price}
                </span>

                {product.originalPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    US$ {product.originalPrice}
                  </span>
                )}
              </div>

              {product.reviews > 0 && (
                <div className="mt-2 flex items-center justify-center gap-1">
                  <span className="text-[12px] text-[#FCC600]">
                    {"★".repeat(Math.round(product.rating))}
                    {"☆".repeat(5 - Math.round(product.rating))}
                  </span>

                  <span className="text-[11px] text-gray-400">
                    ({product.reviews})
                  </span>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
