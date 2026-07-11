"use client";

import { Heart } from "lucide-react";
import Swal from "sweetalert2";

type Props = {
  productId: string;
  isWishlist: boolean;
  onAddWishlist: (productId: string) => void;
};

export default function AddRemoveWishlist({
  productId,
  isWishlist,
  onAddWishlist,
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
      className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 transition hover:scale-110 hover:bg-white"
    >
      <Heart
        className={`h-6 w-6 text-primary ${
          isWishlist ? "fill-current" : "fill-none"
        }`}
      />
    </button>
  );
}
