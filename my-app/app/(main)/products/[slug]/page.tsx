import Image from "next/image";
import AddToWishlist from "@/components/AddToWishlist";
import AddRemoveWishlist from "@/components/AddRemoveWishlist";
import WishlistButton from "@/components/AddToWishlist";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // console.log(await params, "paramm<<");
  const { slug } = await params;

  const data = await fetch(`http://localhost:3000/api/products/${slug}`);

  const product = await data.json();

  return (
    <main className="mx-auto max-w-7xl px-10 py-10">
      {/* BREADCRUMB */}
      <p className="mb-5 text-sm text-gray-400">
        Home &nbsp;›&nbsp; {product.name}
      </p>

      <div className="grid grid-cols-2 gap-14">
        {/* LEFT IMAGE */}
        <div>
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <Image
              src={product.thumbnail || product.images[0] || product.images[1]}
              alt={product.name}
              width={500}
              height={500}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* THUMBNAILS */}
          <div className="mt-4 flex gap-4">
            {product.images.map((image: string) => (
              <div
                key={image}
                className="relative h-28 w-28 overflow-hidden rounded-xl"
              >
                <Image
                  src={image}
                  alt="Pikachu"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT INFO */}
        <div className="w-full">
          {/* TITLE */}
          <h1 className="text-4xl font-extrabold leading-tight text-primary">
            {product.name}
          </h1>

          {/* TAGS */}
          <div className="mt-3 flex flex-wrap gap-2">
            {product.tags.map((tag: string) => (
              <span
                key={tag}
                className="rounded-full bg-pink-100 px-3 py-1 mb-5 text-sm font-medium text-primary"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* PRICE */}
          <p className="mt-2 text-3xl text-gray-600">US$ {product.price}</p>

          {/* PRODUCT INFO */}
          <div className="mt-5 space-y-1 text-base text-gray-500">
            {product.freeShipping === true && (
              <p>♧ &nbsp; This Item Ships Free!</p>
            )}

            <p>
              ♧ &nbsp; Earn {product.rewards}
              <span className="text-primary underline"> Kawaii Coins</span> from
              this product
            </p>
          </div>

          {/* CART */}
          <div className="mt-5 flex gap-4">
            <div className="w-28 rounded-xl border border-gray-300 px-4 py-2">
              <p className="text-xs text-gray-400">Quantity</p>

              <select className="w-full bg-transparent text-gray-500 outline-none">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>

            <button className="flex-1 rounded-xl bg-primary text-lg text-white">
              Add to Cart
            </button>
          </div>

          {/* WISHLIST */}
          <button className="mt-3 flex w-full justify-center text-lg text-primary">
            <WishlistButton productId={product._id} />
          </button>

          {/* DESCRIPTION */}
          <div className="mt-8 text-base leading-relaxed text-gray-500">
            <p>{product.description}</p>

            <ul className="mt-5 list-disc pl-7">
              {product.features.map((x: string, idx: number) => {
                return <li key={idx}> {x}</li>;
              })}
            </ul>
          </div>

          {/* MORE DETAILS */}
          <div className="mt-10 border-y border-gray-200 py-5">
            <button className="flex w-full items-center justify-between text-gray-500">
              <span className="flex items-center gap-4">
                <span>☰</span>
                More Details
              </span>

              <span className="text-xl">+</span>
            </button>
          </div>

          {/* SHOP PAY
          <div className="mt-8 text-base text-gray-600">
            <p>
              Pay in 4 interest-free installments of{" "}
              <span className="font-semibold">$16.23</span> with{" "}
              <span className="rounded bg-purple-600 px-1 text-xs font-bold text-white">
                shop Pay
              </span>
            </p>

            <button className="mt-1 underline">Learn more</button>
          </div> */}
        </div>
      </div>
    </main>
  );
}
