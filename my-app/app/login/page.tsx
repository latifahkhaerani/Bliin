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
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

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
    <main className="relative flex min-h-screen justify-center bg-white px-6">
      <div className="flex w-full max-w-113.75 flex-col">
        <div className="flex justify-center pt-12.5">
          <Image
            src="/logo.png"
            alt="Bliin"
            width={125}
            height={60}
            className="h-auto w-auto object-contain"
          />
        </div>

        <form onSubmit={handleLogin} className="mt-10">
          <h2 className="text-[30px] font-bold tracking-tight text-black">
            Sign in
          </h2>

          <p className="mt-1 text-[17px] text-gray-500">
            Sign in or create an account
          </p>

          <div className="mt-6 flex h-14.5 items-center rounded-xl border border-gray-300 px-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 text-[16px] text-black outline-none placeholder:text-gray-500"
            />
          </div>

          <div className="mt-5 flex h-14.5 items-center rounded-xl border border-gray-300 px-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-1 text-[16px] text-black outline-none placeholder:text-gray-500"
            />
          </div>

          <button
            type="submit"
            className="mt-6 h-15 w-full rounded-xl bg-[#5433EB] text-[18px] font-semibold text-white transition hover:bg-[#4828d8]"
          >
            Submit
          </button>

          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-300" />

            <span className="text-gray-500">or</span>

            <div className="h-px flex-1 bg-gray-300" />
          </div>

          <Link href="/register">
            <button
              type="button"
              className="h-15 w-full rounded-xl bg-[#f0f0f0] text-[18px] font-semibold text-black"
            >
              Create Account
            </button>
          </Link>

          <p className="mt-6 text-center text-[14px] text-gray-500">
            By continuing, you agree to our Terms of service
          </p>
        </form>
      </div>
    </main>
  );
}
