import Link from "next/link";
import { ProductType } from "@/types";

import FeaturedProductList from "./FeaturedProductList";

export default async function FeaturedProduct() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);

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
      <FeaturedProductList products={showFeatured} />
    </section>
  );
}
