"use client";

import { Heart } from "lucide-react";
import Swal from "sweetalert2";

type Props = {
  productId: string;
  isWishlist: boolean;
  onToggleWishlist: (productId: string) => void;
  variant?: "card" | "detail";
};

export default function AddRemoveWishlist({
  productId,
  isWishlist,
  onToggleWishlist,
  variant = "card",
}: Props) {
  const handleAddWishlist = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      const response = await fetch("/api/wishlist", {
        method: isWishlist ? "DELETE" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw data;
      }

      onToggleWishlist(productId);
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: (error as Error).message,
        icon: "error",
      });
    }
  };

  return (
    <button
      type="button"
      onClick={handleAddWishlist}
      className={
        variant === "card"
          ? `absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200 hover:scale-110`
          : `flex w-full items-center justify-center gap-2 rounded-xl border border-primary py-3 text-primary transition hover:bg-pink-50`
      }
    >
      <Heart
        className={`h-5 w-5 transition-all duration-200 ${
          isWishlist
            ? "fill-white text-white drop-shadow-md"
            : "fill-none text-white"
        }`}
      />

      {variant === "detail" && <span>Add to Wishlist</span>}
    </button>
  );
}
