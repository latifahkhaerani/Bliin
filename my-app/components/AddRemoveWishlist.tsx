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
          ? `absolute right-2 top-2
         flex h-8 w-8 items-center justify-center
         rounded-full
         transition-all duration-200
         hover:scale-110`
          : `mt-1 flex w-full items-center justify-center gap-2
         rounded-lg
         bg-white
         py-2.5
         text-sm
         font-medium
         text-primary
         transition-all duration-200
         hover:border-primary
         `
      }
    >
      <Heart
        className={`transition-all duration-200
      ${variant === "card" ? "h-5 w-5" : "h-4 w-4"}
      ${
        variant === "card"
          ? isWishlist
            ? "fill-white text-white drop-shadow-md"
            : "fill-none text-white"
          : isWishlist
            ? "fill-primary text-primary"
            : "fill-none text-primary"
      }`}
      />

      {variant === "detail" && (
        <span>{isWishlist ? "Added to Wishlist" : "Add to Wishlist"}</span>
      )}
    </button>
  );
}
