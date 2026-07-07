import Link from "next/link";
import ListProduct from "./ListProduct";

export default function FeaturedProduct() {
  return (
    <section className="bg-white pb-16">
      {/* TITLE */}
      <div className="text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          Our Favorites
        </p>

        <h2 className="text-4xl font-bold text-gray-700">Shop Lucky Bags</h2>

        <p className="mx-auto mt-3 max-w-xl text-base text-gray-500">
          Discover a surprise collection of cute and carefully selected kawaii
          items.
        </p>

        <Link
          href="/products"
          className="mt-5 inline-block text-sm font-medium text-gray-600 underline underline-offset-4 transition hover:text-primary"
        >
          Shop All Products
        </Link>
      </div>
      <ListProduct />
    </section>
  );
}
