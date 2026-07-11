"use client";

import { Heart } from "lucide-react";
import Swal from "sweetalert2";

type Props = {
  productId: string;
  isWishlist: boolean;
  onAddWishlist: (productId: string) => void;
  variant?: "card" | "detail";
};

export default function AddRemoveWishlist({
  productId,
  isWishlist,
  onAddWishlist,
  variant = "card",
}: Props) {
  const handleAddWishlist = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      const response = await fetch("/api/wishlist", {
        method: "POST",
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

      onAddWishlist(productId);
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
          ? "absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 transition hover:scale-110 hover:bg-white"
          : "flex w-full items-center justify-center gap-2 rounded-lg  py-3 text-lg text-primary transition hover:opacity-80"
      }
    >
      <Heart
        className={`${
          variant === "card" ? "h-6 w-6" : "h-5 w-5"
        } text-primary ${isWishlist ? "fill-current" : "fill-none"}`}
      />

      {variant === "detail" && <span>Add to Wishlist</span>}
    </button>
  );
}
