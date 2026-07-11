"use client";

import { Lock, ShoppingBag, X } from "lucide-react";
import { useState } from "react";

export default function CartButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ICON */}
      <button
        onClick={() => setOpen(true)}
        className="relative transition hover:scale-105"
      >
        <ShoppingBag className="text-abu" />

        <span className=" absolute top-0 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-abu text-[9px] font-bold text-white">
          0
        </span>
      </button>

      {/* BACKDROP */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 p- z-40 bg-black/45 transition-opacity"
        />
      )}

      {/* DRAWER */}
      <aside
        className={`fixed top-0 m-5 rounded-2xl right-0 z-50   overflow-hidden   h-[94%] w-95
  bg-white shadow-[0_0_40px_rgba(0,0,0,.18)]
  transition-all duration-300 ease-out
  ${open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="px-8 pt-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-extrabold text-primary">
                Shopping Cart
              </h2>

              <button onClick={() => setOpen(false)}>
                <X size={22} />
              </button>
            </div>

            {/* subtotal */}
            <div className="mt-5">
              <div className="flex justify-between text-sm font-semibold">
                <span>
                  Subtotal{" "}
                  <span className="font-normal text-gray-400">(0 items)</span>
                </span>

                <span>US$ 0.00</span>
              </div>

              <div className="mt-2 h-1.5 rounded-full bg-gray-200">
                <div className="h-full w-0 rounded-full bg-primary"></div>
              </div>

              <p className="mt-3 text-center text-[12px] font-bold text-gray-800">
                Spend only <span className="font-semibold">US$100.00</span>
                <span className="font-light"> more for Free Shipping!</span>
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 mt-10 px-10 py-16">
            <div className="text-center ">
              <h3 className="text-lg font-extrabold uppercase text-gray-700">
                Your Cart is Empty
              </h3>

              <p className="mt-4 text-gray-500 text-[12px]">
                This cart is a UI preview only. Wishlist is the main feature in
                this clone.
              </p>

              <button
                onClick={() => setOpen(false)}
                className="w-fit rounded-2xl mt-3 bg-primary p-2 text-white"
              >
                <p className="text-[12px]"> Check Our New Arrivals!</p>
              </button>
            </div>
          </div>

          {/* Footer */}

          <div className="p-6 bg-[#f5f5f5] ">
            <p className="mb-5 flex items-center justify-center gap-1 text-[10px] text-gray-500">
              <Lock size={10} />

              <span>
                <strong className="text-gray-800">100% Secure</strong> Online
                Payments
              </span>
            </p>

            <button className="w-full rounded-2xl bg-primary py-2 text-white">
              <p className="text-sm font-bold"> CHECKOUT </p>
            </button>

            <button
              onClick={() => setOpen(false)}
              className="mt-3 w-full rounded-2xl border border-primary py-2 text-primary mb-3"
            >
              <p className="text-sm font-bold">Continue Shopping </p>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
