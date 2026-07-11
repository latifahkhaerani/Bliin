import { ChevronDown, Heart, ShoppingBag, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";
import LogoutButton from "./LogoutButton";

export default async function Navbar() {
  const cookieStore = await cookies();

  const authorization = cookieStore.get("Authorization");

  const isLogin = !!authorization;

  return (
    <>
      <div className="flex justify-center bg-primary p-2">
        <strong className="text-white">Order today, shipped today</strong>
      </div>

      <section className="flex items-center justify-between px-7 py-8">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={120}
            height={40}
            className="h-auto w-auto"
          />
        </Link>

        <div className="flex items-center gap-4">
          {/* PROFILE */}
          <div className="group relative">
            <User className="cursor-pointer text-abu" />

            <div className="absolute right-0 top-full z-50 hidden pt-3 group-hover:block">
              <div className="w-48 rounded-lg border border-gray-200 bg-white p-2 shadow-lg">
                {isLogin ? (
                  <Link href="/login">
                    <LogoutButton />
                  </Link>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="block rounded-md px-4 py-2 text-abu hover:bg-gray-100"
                    >
                      Login
                    </Link>

                    <Link
                      href="/register"
                      className="block rounded-md px-4 py-2 text-abu hover:bg-gray-100"
                    >
                      Create an account
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>

          <Link href="/wishlist">
            <Heart className="text-abu" />
          </Link>

          <ShoppingBag className="text-abu" />
        </div>
      </section>

      {/* NAVIGATION */}
      <section className="flex justify-around">
        <button className="flex items-center gap-1">
          <p className="text-abu">WHAT NEW?</p>
          <ChevronDown className="text-abu" size={17} />
        </button>

        <button className="flex items-center gap-1">
          <p className="text-abu">POPULAR ITEMS</p>
          <ChevronDown className="text-abu" size={17} />
        </button>

        <button className="flex items-center gap-1">
          <p className="text-abu">SCHOOL & OFFICE</p>
          <ChevronDown className="text-abu" size={17} />
        </button>

        <button className="flex items-center gap-1">
          <p className="text-abu">CLOTHING AND ACCESORIES</p>
          <ChevronDown className="text-abu" size={17} />
        </button>
      </section>
    </>
  );
}
