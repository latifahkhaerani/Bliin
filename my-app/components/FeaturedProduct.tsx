import Link from "next/link";
import { ProductType } from "@/types";
import Image from "next/image";
import AddRemoveWishlist from "./AddRemoveWishlist";

export default async function FeaturedProduct() {
  const data = await fetch("http://localhost:3000/api/products");

  const products: ProductType[] = await data.json();
  const showFeatured = products
    .filter((product) => product.rating >= 4)
    .slice(0, 5);

  return (
    <section className="bg-white pb-16">
      {/* TITLE */}
      <div className="text-center">
        <p className="mb-3 mt-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          Our Favorites
        </p>

        <h2 className="text-4xl font-bold text-gray-700">Shop Lucky Bags</h2>

        <p className="mx-auto mt-3 max-w-xl text-base text-gray-500">
          Discover a surprise collection of cute and carefully selected kawaii
          items.
        </p>

        <Link
          href="/products"
          className="mt-5 inline-block text-sm mb-5 font-medium text-gray-600 underline underline-offset-4 transition hover:text-primary"
        >
          Shop All Products
        </Link>
      </div>
      {/* product */}
      <div className="grid grid-cols-5 gap-6 px-8">
        {showFeatured.map((product) => (
          <Link
            href={`/products/${product.slug}`}
            key={product._id}
            className="min-w-0"
          >
            {/* IMAGE */}
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src={
                  product.images?.[1] || product.images[0] || product.thumbnail
                }
                alt={product.name}
                fill
                sizes="100vw"
                className="object-cover"
              />

              {/* BADGE */}
              {/* {product.badge && (
                <span
                  className={`absolute left-3 top-3 rounded-xl px-4 py-2 text-base text-white ${
                    product.badge === "Sold Out" ? "bg-gray-700" : "bg-primary"
                  }`}
                >
                  {product.badge}
                </span>
              )} */}

              {/* ADD TO FAVORITE */}
              <AddRemoveWishlist />
            </div>

            {/* PRODUCT INFO */}
            <div className="mt-4 text-center">
              <h3 className="min-h-15 text-xl text-gray-600">{product.name}</h3>

              {/* PRICE */}
              <div className="mt-2 flex items-center justify-center gap-2">
                <span className={`text-xl`}>{product.price}</span>

                {product.originalPrice && (
                  <span className="text-base text-gray-400 line-through">
                    {product.originalPrice}
                  </span>
                )}
              </div>

              {/* REVIEWS */}
              {product.reviews && (
                <div className="mt-4 flex items-center justify-center gap-2">
                  <div className="flex items-center gap-2">
                    <span>{product.rating.toFixed(1)}</span>

                    <span className="text-yellow-400">
                      {"★".repeat(Math.round(product.rating))}
                      {"☆".repeat(5 - Math.round(product.rating))}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
