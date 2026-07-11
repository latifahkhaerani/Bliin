import { fredoka } from "@/app/(main)/layout";

export default function DetailInfo() {
  return (
    <section className="px-12 pt-10 pb-12 text-center">
      <div className="mx-auto max-w-5xl">
        <p
          className={`${fredoka.className} mb-3 text-5xl font-semibold uppercase tracking-[0.3em] text-primary`}
        >
          Discover Kawaii
        </p>

        <h2 className="text-3xl font-bold mt-5 leading-tight text-gray-700">
          Cute Plushies, Accessories
          <br />
          <span className="text-primary">& Collectibles</span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-sm leading-8 text-gray-500">
          Shop cute and adorable kawaii merchandise, including plushies,
          stationery, accessories, collectibles, home goods, and more. Find your
          favorite items and bring a little kawaii happiness into your everyday
          life.
        </p>
      </div>
      <div className="mx-auto mt-6 h-px w-180 bg-gray-200" />
    </section>
  );
}
