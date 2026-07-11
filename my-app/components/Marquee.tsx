export default function Marquee() {
  return (
    <div className="overflow-hidden bg-white py-3">
      <div className="flex w-max animate-marquee gap-10">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex items-center gap-5">
            <h2 className="text-2xl font-bold text-gray-600">
              Up to 50% OFF!
            </h2>

            <button className="rounded-xl bg-primary px-7 py-2 text-sm font-medium text-white transition hover:opacity-90">
              Shop Sale!
            </button>
          </div>
        ))}

        {/* duplicate */}
        {[...Array(8)].map((_, i) => (
          <div key={`copy-${i}`} className="flex items-center gap-5">
            <h2 className="text-3xl font-bold text-gray-600">
              Up to 50% OFF!
            </h2>

            <button className="rounded-full bg-primary px-7 py-2 text-sm font-medium text-white transition hover:opacity-90">
              Shop Sale!
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}