import { Heart } from "lucide-react";

export default function AddToWishlist() {
  return (
    <>
      <button className="mt-3 flex w-full justify-center text-lg text-primary">
        <Heart /> &nbsp; Add to Wishlist
      </button>
    </>
  );
}
