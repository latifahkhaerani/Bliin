import Image from "next/image";

export default function Banner() {
  return (
    <>
      <main className="max-h-screen bg-lightPink pt-20 pb-5">
        {/* HERO */}
        <section className="mx-9 overflow-hidden rounded-3xl bg-yellow">
          <div className="flex h-103.75">
            {/* LEFT CONTENT */}
            <div className="flex w-[31%] flex-col justify-center bg-yellow px-16">
              <h1 className="mb-10 text-7xl font-extrabold leading-[1.2] text-white drop-shadow-lg">
                Get
                <br />
                Yours
                <br />
                Now!
              </h1>

              <button className="w-fit rounded-2xl bg-primary px-7 py-3">
                <p className="text-xl text-white">Get It Here!</p>
              </button>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative flex-1">
              <Image
                src="https://www.blippo.com/cdn/shop/files/Pompompurin_Lucky_Bag_Banner1_1024x1024.jpg?v=1782289235%22%20alt=%22%22%20class=%22rimage__image"
                alt="Pompompurin Lucky Bags"
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* SLIDER NAVIGATION */}
        <div className="mt-3 flex items-center justify-between px-10">
          <button className="text-4xl font-light text-gray-600">←</button>

          <div className="flex items-center gap-5">
            <div className="h-3 w-3 rounded-full border-2 border-gray-300" />
            <div className="h-2 w-2 rounded-full bg-gray-400" />
            <div className="h-2 w-2 rounded-full bg-gray-400" />
            <div className="h-2 w-2 rounded-full bg-gray-400" />
          </div>

          <button className="text-4xl font-light text-gray-600">→</button>
        </div>
      </main>
    </>
  );
}
