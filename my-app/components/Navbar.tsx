import { ChevronDown, Heart, ShoppingBag, User } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div className="bg-primary flex justify-center p-2">
        <strong className="text-white ">Order today, shipped today</strong>
      </div>
      <section className="flex justify-between  items-center py-8 px-7">
        {/* <SearchBar /> */}
        <Image src="/logo.png" alt="logo" width={120} height={40} />
        <div className="flex gap-4">
          <User className="text-abu" />
          <Heart className="text-abu" />
          <ShoppingBag className="text-abu" />
        </div>
      </section>
      {/* navigation */}
      <section className="flex justify-around">
        <button className="flex items-center gap-1">
          <p className="text-abu"> WHAT NEW? </p>
          <ChevronDown className="text-abu" size={17} />
        </button>
        <button className="flex items-center gap-1">
          <p className="text-abu"> POPULAR ITEMS </p>
          <ChevronDown className="text-abu" size={17} />
        </button>
        <button className="flex items-center gap-1">
          <p className="text-abu"> SCHOOL & OFFICE </p>
          <ChevronDown className="text-abu" size={17} />
        </button>
        <button className="flex items-center gap-1">
          <p className="text-abu"> CLOTHING AND ACCESORIES </p>
          <ChevronDown className="text-abu" size={17} />
        </button>
      </section>
    </>
  );
}
