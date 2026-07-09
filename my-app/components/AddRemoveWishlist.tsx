"use client"

import { Heart } from "lucide-react";

export default function AddRemoveWishlist() {
  return (
    <button
      type="button"
      className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 transition hover:scale-110 hover:bg-white"
    >
      <Heart className="h-6 w-6 text-primary" />
    </button>
  );
}
