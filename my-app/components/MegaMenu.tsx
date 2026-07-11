import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function MegaMenu() {
  return (
    <div className="group relative">
      <button className="flex items-center gap-1 text-sm font-semibold uppercase tracking-wide text-abu transition hover:border-b border-abu pb-2">
        SHOP BY TAGS
        <ChevronDown size={15} />
      </button>

      <div className="absolute left-1/2 top-full z-50 hidden w-[520px] -translate-x-1/2 rounded-xl border border-gray-100 bg-white p-8 shadow-xl group-hover:block">
        <div className="grid grid-cols-2 gap-10">
          {/* CHARACTER */}

          <div>
            <h3 className="mb-4 font-semibold text-gray-700">Characters</h3>

            <div className="space-y-2 text-sm text-gray-500">
              <Link
                href="/products?q=hello kitty"
                className="block hover:text-primary"
              >
                Hello Kitty
              </Link>

              <Link
                href="/products?q=kuromi"
                className="block hover:text-primary"
              >
                Kuromi
              </Link>

              <Link
                href="/products?q=cinnamoroll"
                className="block hover:text-primary"
              >
                Cinnamoroll
              </Link>

              <Link
                href="/products?q=my melody"
                className="block hover:text-primary"
              >
                My Melody
              </Link>

              <Link
                href="/products?q=pompompurin"
                className="block hover:text-primary"
              >
                Pompompurin
              </Link>

              <Link
                href="/products?q=kirby"
                className="block hover:text-primary"
              >
                Kirby
              </Link>
            </div>
          </div>

          {/* PRODUCT */}

          <div>
            <h3 className="mb-4 font-semibold text-gray-700">Product Type</h3>

            <div className="space-y-2 text-sm text-gray-500">
              <Link
                href="/products?q=plush"
                className="block hover:text-primary"
              >
                Plushies
              </Link>

              <Link
                href="/products?q=accessories"
                className="block hover:text-primary"
              >
                Accessories
              </Link>

              <Link
                href="/products?q=stationery"
                className="block hover:text-primary"
              >
                Stationery
              </Link>

              <Link
                href="/products?q=figure"
                className="block hover:text-primary"
              >
                Figures
              </Link>

              <Link
                href="/products?q=blind box"
                className="block hover:text-primary"
              >
                Blind Box
              </Link>

              <Link
                href="/products?q=home"
                className="block hover:text-primary"
              >
                Home Goods
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
