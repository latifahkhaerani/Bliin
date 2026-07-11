import Image from "next/image";
import WishlistButton from "@/components/WishlistButton";
import { Metadata } from "next";
import { ProductType } from "@/types";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const product: ProductType = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${slug}`,
    {
      cache: "no-store",
    },
  ).then((res) => res.json());

  return {
    title: `${product.name} | Bliin`,
    description: product.excerpt,

    openGraph: {
      title: product.name,
      description: product.excerpt,
      images: [
        {
          url: product.thumbnail,
        },
      ],
    },
  };
}

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // console.log(await params, "paramm<<");
  const { slug } = await params;

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${slug}`,
  );

  const product = await data.json();

  return (
    <main className="mx-auto max-w-6xl px-10 py-8">
      {/* BREADCRUMB */}
      <p className="mb-6 text-xs text-gray-400">
        Home &nbsp;›&nbsp; {product.name}
      </p>

      <div className="grid grid-cols-[1.05fr_0.95fr] gap-10">
        {/* LEFT */}
        <div>
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-gray-100">
            <Image
              src={product.thumbnail || product.images[0] || product.images[1]}
              alt={product.name}
              width={700}
              height={700}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          {/* THUMBNAILS */}
          <div className="mt-4 flex gap-3">
            {product.images.map((image: string) => (
              <div
                key={image}
                className="relative h-20 w-20 overflow-hidden rounded-xl border border-gray-200"
              >
                <Image
                  src={image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div>
          {/* TITLE */}
          <h1 className="text-[32px] font-bold leading-tight text-primary">
            {product.name}
          </h1>
          {/* PRICE */}
          <p className="text-[28px] font-light text-gray-700">
            US$ {product.price}
          </p>

          {/* TAGS */}
          <div className="mt-3 mb-5 flex flex-wrap gap-2">
            {product.tags.map((tag: string) => (
              <span
                key={tag}
                className="rounded-full border border-pink-200 px-3 py-1 text-[11px] text-primary"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* PRODUCT INFO */}
          <div className="mt-5 space-y-2 text-sm text-gray-500">
            {product.freeShipping && <p>✦ This Item Ships Free!</p>}

            <p>
              ✦ Earn {product.rewards}
              <span className="text-primary underline"> Kawaii Coins</span> from
              this product
            </p>
          </div>

          {/* CART */}
          <div className="mt-6 flex gap-3">
            <div className="w-20 rounded-lg border border-gray-300 px-3 py-2">
              <p className="text-[10px] text-gray-400">Quantity</p>

              <select className="mt-1 w-full bg-transparent text-sm text-gray-600 outline-none">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>

            <button className="flex-1 rounded-lg bg-primary text-sm font-medium text-white transition hover:opacity-90">
              Add to Cart
            </button>
          </div>

          {/* WISHLIST */}
          <div className="mt-3">
            <WishlistButton productId={product._id} />
          </div>

          {/* DESCRIPTION */}
          <div className="mt-10">
            <h2 className="mb-4 text-2xl font-bold text-primary">
              Product Details
            </h2>

            <p className="text-[15px] leading-7 text-gray-500">
              {product.description}
            </p>

            <ul className="mt-5 list-disc space-y-2 pl-6 text-[15px] text-gray-500">
              {product.features.map((feature: string, idx: number) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
