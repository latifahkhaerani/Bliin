import Link from "next/link";
import { Music2, Heart, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-8 bg-primary text-white">
      <div className="mx-auto grid max-w-8xl grid-cols-4 gap-10 px-12 py-8">
        {/* HELP */}
        <div>
          <h3 className="mb-6 text-sm font-bold">Help</h3>

          <div className="space-y-3 text-sm text-pink-100">
            <Link href="#" className="block hover:text-white">
              Contact Us
            </Link>

            <Link href="#" className="block hover:text-white">
              Shipping Information
            </Link>

            <Link href="#" className="block hover:text-white">
              Returns
            </Link>

            <Link href="#" className="block hover:text-white">
              FAQ
            </Link>

            <Link href="#" className="block hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* ABOUT */}
        <div>
          <h3 className="mb-6 text-sm font-bold">About Us</h3>

          <div className="space-y-3 text-sm text-pink-100">
            <Link href="#" className="block hover:text-white">
              Our Story
            </Link>

            <Link href="#" className="block hover:text-white">
              Rewards Program
            </Link>

            <Link href="#" className="block hover:text-white">
              Reviews
            </Link>

            <Link href="#" className="block hover:text-white">
              Kawaii Blog
            </Link>

            <Link href="#" className="block hover:text-white">
              Careers
            </Link>
          </div>
        </div>

        {/* SHOP */}
        <div>
          <h3 className="mb-6 text-sm font-bold">Shop</h3>

          <div className="space-y-3 text-sm text-pink-100">
            <Link href="/products" className="block hover:text-white">
              All Products
            </Link>

            <Link href="/wishlist" className="block hover:text-white">
              Wishlist
            </Link>

            <Link href="#" className="block hover:text-white">
              Lucky Bags
            </Link>

            <Link href="#" className="block hover:text-white">
              Plushies
            </Link>

            <Link href="#" className="block hover:text-white">
              Stationery
            </Link>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="mb-6 text-sm font-bold">Be the first to know!</h3>

          <div className="flex overflow-hidden rounded-xl bg-white">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-4 py-3 text-sm text-gray-700 outline-none"
            />

            <button className="px-4 text-primary transition hover:bg-pink-50">
              <Send size={18} />
            </button>
          </div>

          <p className="mt-5 text-[13px] text-pink-100">
            Receive the latest kawaii news and deals!
          </p>

          <div className="mt-6 flex gap-4">
            {/* <Youtube className="cursor-pointer hover:scale-110 transition" /> */}

            {/* <Instagram className="cursor-pointer hover:scale-110 transition" /> */}

            {/* <Music2 className="cursor-pointer hover:scale-110 transition" />

            <Heart className="cursor-pointer hover:scale-110 transition" /> */}
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className=" border-pink-300/40 px-6 pb-10 pt-3 text-center text-[10px] text-pink-100">
        Copyright © {new Date().getFullYear()} Bliin — Built for educational
        purposes. Inspired by Blippo.com.
      </div>
    </footer>
  );
}
