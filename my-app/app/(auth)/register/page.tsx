"use client";

import Image from "next/image";
import Link from "next/link";
import { SubmitEvent, useState } from "react";
import Swal from "sweetalert2";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          username,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw data;
      }

      window.location.href = "/login";
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: (error as Error).message,
        icon: "error",
      });
    }
  };

  return (
    <>
      <main className="relative flex min-h-screen justify-center bg-white px-6">
        <div className="flex w-full max-w-113.75 flex-col">
          {/* LOGO */}
          <div className="flex justify-center pt-12.5">
            <Image
              src="/logo.png"
              alt="Blippo"
              width={125}
              height={60}
              className="object-contain w-auto h-auto"
            />
          </div>

          {/* FORM */}
          <form onSubmit={handleRegister} className="mt-10">
            <h2 className="text-[30px] font-bold tracking-tight text-black">
              Sign up
            </h2>

            <p className="mt-1 text-[17px] text-gray-500">
              Sign up or already have an account
            </p>

            {/* INPUT */}
            <div className="mt-6 flex h-14.5 items-center rounded-xl border border-gray-300 px-4">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="flex-1 text-[16px] text-black outline-none placeholder:text-gray-500"
              />
            </div>

            <div className="mt-6 flex h-14.5 items-center rounded-xl border border-gray-300 px-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 text-[16px] text-black outline-none placeholder:text-gray-500"
              />
            </div>

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

            {/* DIVIDER */}
            <div className="my-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-gray-300" />

              <span className="text-gray-500">or</span>

              <div className="h-px flex-1 bg-gray-300" />
            </div>
            {/* LOGIN BUTTON */}
            <Link href="/login">
              <button className=" h-15 w-full rounded-xl  text-[18px] font-semibold text-black transition hover:bg-grey-500 bg-[#f0f0f0]">
                Already have an account?
              </button>
            </Link>

            {/* TERMS */}
            <p className="mt-6 text-center text-[14px] text-gray-500">
              By continuing, you agree to our
              <button className="underline underline-offset-2">
                Terms of service
              </button>
            </p>
          </form>
        </div>
      </main>
    </>
  );
}
