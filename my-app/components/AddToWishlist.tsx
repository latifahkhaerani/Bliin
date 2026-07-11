"use client";

import { useEffect, useState } from "react";
import AddRemoveWishlist from "./AddRemoveWishlist";

type Props = {
  productId: string;
};

export default function WishlistButton({ productId }: Props) {
  const [wishlist, setWishlist] = useState<string[]>([]);

  async function getWishlist() {
    try {
      const response = await fetch("/api/wishlist");

      if (!response.ok) return;

      const data = await response.json();

      setWishlist(data.map((item: { productId: string }) => item.productId));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getWishlist();
  }, []);

  function handleAddWishlist(productId: string) {
    setWishlist((prev) => [...prev, productId]);
  }

  return (
    <>
      <AddRemoveWishlist
        productId={productId}
        isWishlist={wishlist.includes(productId)}
        onAddWishlist={handleAddWishlist}
      />
      &nbsp; Add to Wishlist
    </>
  );
}
