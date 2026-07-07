import Link from "next/link";
import ListProduct from "./ListProduct";

export default function FeaturedProduct() {
  return (
    <>
      {/* TITLE */}
      <section className="mt-6 text-center">
        <h2 className="text-5xl font-extrabold text-primary mb-5">
          SHOP LUCKY BAGS
        </h2>
        <Link
          href="/products"
          className=" text-lg text-primary underline underline-offset-4 hover:opacity-70"
        >
          Shop All Products
        </Link>
      </section>
      <ListProduct />
    </>
  );
}
