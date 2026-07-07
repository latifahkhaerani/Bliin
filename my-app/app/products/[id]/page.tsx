import Image from "next/image";
import DetailInfo from "@/components/DetailInfo";

export default function ProductDetail() {
  return (
    <main className="mx-auto max-w-7xl px-10 py-10">
      {/* BREADCRUMB */}
      <p className="mb-5 text-sm text-gray-400">
        Home &nbsp;›&nbsp; Pokemon Monpoke Plushie - Pikachu / Jumbo
      </p>

      <div className="grid grid-cols-2 gap-14">
        {/* LEFT IMAGE */}
        <div>
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <Image
              src="/pikachu.jpg"
              alt="Pikachu Plushie"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* THUMBNAILS */}
          <div className="mt-4 flex gap-4">
            {[
              "/pikachu.jpg",
              "/pikachu-2.jpg",
              "/pikachu-3.jpg",
              "/pikachu-4.jpg",
            ].map((image) => (
              <div
                key={image}
                className="relative h-28 w-28 overflow-hidden rounded-xl"
              >
                <Image
                  src={image}
                  alt="Pikachu"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT INFO */}
        <DetailInfo />
      </div>
    </main>
  );
}
