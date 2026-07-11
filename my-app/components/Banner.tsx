import { AlignLeft, ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Banner() {
  return (
    <>
      <main
        className="max-h-screen pt-8 pb-5"
        style={{
          background:
            "linear-gradient(to bottom, #FCE7F3 0%, #FCE7F3 45%, #FFFFFF 100%)",
        }}
      >
        {/* HERO */}
        <section className="mx-9 overflow-hidden rounded-3xl bg-yellow">
          <div className="flex h-103.75">
            {/* LEFT CONTENT */}
            <div className="flex w-[30%] flex-col justify-center bg-[#FDEB8D] px-10">
              <h1
                className="mb-8 text-[80px] font-extrabold leading-[0.95] tracking-tight text-white"
                style={{
                  textShadow: "5px 5px 8px rgba(98,59,45,.45)",
                }}
              >
                Get
                <br />
                Yours
                <br />
                Now!
              </h1>

              <button className="w-fit rounded-2xl bg-primary px-5 py-2 transition hover:opacity-90">
                <span className="text-sm font-medium text-white">
                  Get It Here!
                </span>
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
        <div className="mt-4 flex items-center sticky top-20 justify-between px-10">
          <ArrowLeft color="grey" size={20} />

          <div className="flex items-center gap-4">
            <div className="h-2 w-2 rounded-full border-2 border-gray-300" />
            <div className="h-1 w-1 rounded-full bg-gray-400" />
            <div className="h-1 w-1 rounded-full bg-gray-400" />
            <div className="h-1 w-1 rounded-full bg-gray-400" />
          </div>

          <ArrowRight color="grey" size={20} />
        </div>
      </main>
    </>
  );
}
