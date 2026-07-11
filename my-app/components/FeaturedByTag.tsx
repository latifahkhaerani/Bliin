import { fredoka } from "@/app/(main)/layout";
import FeaturedProductList from "./FeaturedProductList";
import { ProductType } from "@/types";
import Link from "next/link";

type Props = {
  title: string;
  tag: string;
};

export default async function FeaturedByTag({
  title,
  tag,
}: Props) {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`
  );

  const products: ProductType[] = await data.json();

  const filtered = products
    .filter((product) =>
      product.tags.some(
        (x) => x.toLowerCase() === tag.toLowerCase()
      )
    )
    .slice(0, 5);

  return (
    <section className="bg-white py-10">
      <div className="text-center mb-2">
        <h2
          className={`${fredoka.className} text-3xl text-primary`}
        >
          {title}
        </h2>
          <Link
          href="/products"
          className="mt-3 inline-block text-sm mb-5 font-medium text-primary underline underline-offset-4 transition hover:text-primary"
        >
          Shop All Products
        </Link>
      </div>

      <FeaturedProductList products={filtered} />
    </section>
  );
}