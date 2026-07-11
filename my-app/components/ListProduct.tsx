"use client";

import Image from "next/image";
import AddRemoveWishlist from "./AddRemoveWishlist";
import { ProductType } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";

import InfiniteScroll from "react-infinite-scroll-component";

type Props = {
  keyword: string;
};

export default function ListProduct({ keyword }: Props) {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  async function get(nextPage = 1) {
    try {
      const data = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/products?q=${encodeURIComponent(keyword)}&page=${nextPage}`,
      );

      const newProducts: ProductType[] = await data.json();

      if (nextPage === 1) {
        setProducts(newProducts);
      } else {
        setProducts((prev) => [...prev, ...newProducts]);
      }

      setHasMore(newProducts.length === 10);

      const wishlistResponse = await fetch("/api/wishlist");

      if (wishlistResponse.ok) {
        const wishlistData = await wishlistResponse.json();

        const wishlistProductIds = wishlistData.map(
          (item: { productId: string }) => item.productId,
        );

        setWishlist(wishlistProductIds);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function onToggleWishlist(productId: string) {
    setWishlist((currentWishlist) => [...currentWishlist, productId]);
  }

  useEffect(() => {
    setPage(1);
    setHasMore(true);
    get(1);
  }, [keyword]);

  return (
    <section className="bg-white px-8 pb-10">
      <InfiniteScroll
        dataLength={products.length}
        next={() => {
          const nextPage = page + 1;
          setPage(nextPage);
          get(nextPage);
        }}
        hasMore={hasMore}
        loader={<h4 className="text-center py-5">Loading...</h4>}
        endMessage={
          <p className="text-center py-5">
            <b>No more products</b>
          </p>
        }
      >
        <div className="grid grid-cols-5 gap-6">
          {products.map((product) => {
            const isWishlist = wishlist.includes(product._id);
            // console.log(product._id, typeof product._id, 'iniimis');

            return (
              <Link
                href={`/products/${product.slug}`}
                key={product._id}
                className="block min-w-0 transition hover:opacity-95"
              >
                {/* IMAGE */}
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#fafafa]">
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

                  <AddRemoveWishlist
                    productId={product._id}
                    isWishlist={isWishlist}
                    onToggleWishlist={onToggleWishlist}
                  />
                </div>

                {/* INFO */}
                <div className="mt-3 text-center">
                  {/* NAME */}
                  <h3 className="mx-auto min-h-10 max-w-[95%] text-sm text-gray-600 line-clamp-2">
                    {product.name}
                  </h3>

                  {/* PRICE */}
                  <div className="mt-0 flex items-center justify-center gap-2">
                    <span className="text-lg font-medium text-primary">
                      US$ {product.price}
                    </span>

                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        US$ {product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* RATING */}
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
              </Link>
            );
          })}
        </div>
      </InfiniteScroll>
    </section>
  );
}
