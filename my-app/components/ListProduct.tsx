import { Heart } from "lucide-react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Blippo Kawaii Mixed Lucky Bag",
    image: "/product-1.jpg",
    price: "US$ 45.00",
    oldPrice: "US$ 85.00",
    reviews: 341,
    badge: "Sale",
  },
  {
    id: 2,
    name: "Pompompurin’s Sweetest Lucky Bags",
    image: "/product-2.jpg",
    price: "From US$ 75.00",
  },
  {
    id: 3,
    name: "Pokemon Lucky Bags",
    image: "/product-3.jpg",
    price: "US$ 75.00",
    badge: "Sold Out",
  },
  {
    id: 4,
    name: "Blippo Candy Rescue Bag",
    image: "/product-4.jpg",
    price: "US$ 25.90",
    oldPrice: "US$ 42.90",
    reviews: 134,
    badge: "Sale",
  },
  {
    id: 5,
    name: "Blippo Candy Rescue Bag",
    image: "/product-4.jpg",
    price: "US$ 25.90",
    oldPrice: "US$ 42.90",
    reviews: 134,
    badge: "Sale",
  },
];

export default function ListProduct() {
  return (
    <section className="bg-white px-8 py-10">
      <div className="grid grid-cols-5 gap-6">
        {products.map((product) => (
          <div key={product.id} className="min-w-0">
            {/* IMAGE */}
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />

              {/* BADGE */}
              {product.badge && (
                <span
                  className={`absolute left-3 top-3 rounded-xl px-4 py-2 text-base text-white ${
                    product.badge === "Sold Out" ? "bg-gray-700" : "bg-primary"
                  }`}
                >
                  {product.badge}
                </span>
              )}

              {/* ADD TO FAVORITE */}
              <button
                type="button"
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 transition hover:scale-110 hover:bg-white"
              >
                <Heart className="h-6 w-6 text-primary" />
              </button>
            </div>

            {/* PRODUCT INFO */}
            <div className="mt-4 text-center">
              <h3 className="min-h-15 text-xl text-gray-600">{product.name}</h3>

              {/* PRICE */}
              <div className="mt-2 flex items-center justify-center gap-2">
                <span
                  className={`text-xl ${
                    product.oldPrice ? "text-primary" : "text-gray-600"
                  }`}
                >
                  {product.price}
                </span>

                {product.oldPrice && (
                  <span className="text-base text-gray-400 line-through">
                    {product.oldPrice}
                  </span>
                )}
              </div>

              {/* REVIEWS */}
              {product.reviews && (
                <div className="mt-4 flex items-center justify-center gap-2">
                  <span className="text-lg text-yellow-400">★★★★☆</span>

                  <span className="text-sm text-gray-500">
                    {product.reviews} reviews
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
