"use client";

import Image from "next/image";
import Swal from "sweetalert2";
import { useState, SubmitEvent } from "react";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw data;
      }

      await Swal.fire({
        title: "Success",
        text: "Login successful",
        icon: "success",
      });

      window.location.href = "/";
    } catch (error) {
      const err = error as Error;

      Swal.fire({
        title: "Error",
        text: err.message,
        icon: "error",
      });
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 pt-2 pb-12">
      <div className="flex w-full max-w-113.75 flex-col pb-12">
        {/* LOGO */}
        <div className="flex justify-center">
          <Image
            src="/logo.png"
            alt="Bliin"
            width={125}
            height={60}
            className="h-auto w-auto object-contain"
          />
        </div>

        {/* FORM */}
        <form onSubmit={handleLogin} className="mt-7">
          <h2 className="text-[28px] font-bold tracking-tight text-black">
            Sign in
          </h2>

          <p className="mt-1 text-[15px] text-gray-500">
            Sign in or create an account
          </p>

          {/* EMAIL */}
          <div className="mt-5 flex h-12 items-center rounded-xl border border-gray-300 px-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 text-[15px] text-black outline-none placeholder:text-gray-500"
            />
          </div>

          {/* PASSWORD */}
          <div className="mt-3 flex h-12 items-center rounded-xl border border-gray-300 px-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-1 text-[15px] text-black outline-none placeholder:text-gray-500"
            />
          </div>

          {/* LOGIN */}
          <button
            type="submit"
            className="mt-5 h-12 w-full rounded-xl bg-[#5433EB] text-[16px] font-semibold text-white transition hover:bg-[#4828d8]"
          >
            Submit
          </button>

          {/* DIVIDER */}
          <div className="my-5 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-300" />

            <span className="text-sm text-gray-500">or</span>

            <div className="h-px flex-1 bg-gray-300" />
          </div>

          {/* REGISTER */}
          <Link href="/register">
            <button
              type="button"
              className="h-12 w-full rounded-xl bg-[#f0f0f0] text-[16px] font-semibold text-black transition hover:bg-gray-200"
            >
              Create Account
            </button>
          </Link>

          {/* TERMS */}
          <p className="mt-5 text-center text-[13px] leading-5 text-gray-500">
            By continuing, you agree to our Terms of Service
          </p>
        </form>
      </div>
    </main>
  );
}
