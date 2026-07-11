import { Heart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";
import LogoutButton from "./LogoutButton";

import NavbarSearch from "./NavbarSearch";
import CartButton from "./CartButton";
import NavItem from "./NavItem";
import MegaMenu from "./MegaMenu";

export default async function Navbar() {
  const cookieStore = await cookies();

  const authorization = cookieStore.get("Authorization");

  const isLogin = !!authorization;

  let wishlistCount = 0;

  if (isLogin) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/wishlist`,
      {
        headers: {
          Cookie: cookieStore.toString(),
        },
        cache: "no-store",
      },
    );

    if (response.ok) {
      const wishlists = await response.json();
      wishlistCount = wishlists.length;
    }
  }
  return (
    <>
      <div className="flex justify-center bg-primary p-2">
        <strong className="text-white text-sm">
          Order today, shipped today*
        </strong>
      </div>

      <section className="relative flex items-center justify-between px-10 py-4">
        {/* LEFT */}
        <NavbarSearch />

        {/* CENTER */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
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

          <Link href="/wishlist" className="relative">
            <Heart className="text-abu" />

            {wishlistCount > 0 && (
              <span className=" absolute top-0 -right-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-abu text-[9px] font-bold text-white">
                {wishlistCount}
              </span>
            )}
          </Link>

          <CartButton />
        </div>
      </section>

      {/* NAVIGATION */}
      {/* <section className="flex justify-center gap-12 border-gray-100 mt-3">
        <NavItem title="WHAT'S NEW" />

        <NavItem title="POPULAR ITEMS" />
        <NavItem title="SCHOOL & OFFICE" />
        <NavItem title="CLOTHING & ACCESORIES" />

        <MegaMenu />

        <NavItem title="SALE" />
      </section> */}
        <div className="sticky top-0 z-20 bg-white">
        <section className="flex justify-center gap-12 border-gray-100 mt-3">
          <NavItem title="WHAT'S NEW" />

          <NavItem title="POPULAR ITEMS" />
          <NavItem title="SCHOOL & OFFICE" />
          <NavItem title="CLOTHING & ACCESORIES" />

          <MegaMenu />

          <NavItem title="SALE" />
        </section>
        <div className="flex  justify-center bg-ungu p-2">
          <strong className="text-[#858ad6] text-[12px]">
            2,900 japanese favorite*
          </strong>
        </div>
      </div>
    </>
  );
}
