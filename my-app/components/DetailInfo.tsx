import AddToWishlist from "./AddToWishlist";

export default function DetailInfo() {
  return (
    <div className="w-full">
      {/* TITLE */}
      <h1 className="text-4xl font-extrabold leading-tight text-primary">
        Pokemon Monpoke Plushie -
        <br />
        Pikachu / Jumbo
      </h1>

      {/* PRICE */}
      <p className="mt-2 text-3xl text-gray-600">US$ 64.90</p>

      {/* PRODUCT INFO */}
      <div className="mt-8 space-y-1 text-base text-gray-500">
        <p>⊙ &nbsp; Low stock - 3 in stock, ready to ship</p>
        <p>♧ &nbsp; This Item Ships Free!</p>
        <p>○ &nbsp; Zero U.S. Tariffs - All Fees Included</p>

        <p>
          ♧ &nbsp; Earn 6490{" "}
          <span className="text-primary underline">Kawaii Coins</span> from this
          product
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
      <AddToWishlist />

      {/* DESCRIPTION */}
      <div className="mt-8 text-base leading-relaxed text-gray-500">
        <p>
          Snuggle with this giant Pikachu plushie! This special cutie comes from
          Monpoke — the first-ever official Pokemon baby brand line. You can
          also have fun playing with this fluffy kawaii plushie!
        </p>

        <ul className="mt-5 list-disc pl-7">
          <li>Made from super-soft material</li>
          <li>Safe for babies and small children</li>
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

      {/* SHOP PAY */}
      <div className="mt-8 text-base text-gray-600">
        <p>
          Pay in 4 interest-free installments of{" "}
          <span className="font-semibold">$16.23</span> with{" "}
          <span className="rounded bg-purple-600 px-1 text-xs font-bold text-white">
            shop Pay
          </span>
        </p>

        <button className="mt-1 underline">Learn more</button>
      </div>
    </div>
  );
}
