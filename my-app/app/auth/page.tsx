import Image from "next/image";

export default function Home() {
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
              className="object-contain"
            />
          </div>

          {/* FORM */}
          <div className="mt-10">
            <h2 className="text-[30px] font-bold tracking-tight text-black">
              Sign in
            </h2>

            <p className="mt-1 text-[17px] text-gray-500">
              Sign in or create an account
            </p>

            {/*  INPUT */}
            <div className="flex mt-6 h-14.5 items-center rounded-xl border border-gray-300 px-4">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 text-[16px] text-black outline-none placeholder:text-gray-500"
              />

              <button className="text-2xl text-black">→</button>
            </div>

            <div className="flex h-14.5 mt-5 items-center rounded-xl border border-gray-300 px-4">
              <input
                type="password"
                placeholder="Password"
                className="flex-1 text-[16px] text-black outline-none placeholder:text-gray-500"
              />

              <button className="text-2xl text-black">→</button>
            </div>

            <button className=" h-15 mt-6 w-full rounded-xl bg-[#f0f0f0] text-[18px] font-semibold text-black transition hover:bg-grey-500">
              Submit
            </button>

            {/* DIVIDER */}
            <div className="my-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-gray-300" />

              <span className="text-gray-500">or</span>

              <div className="h-px flex-1 bg-gray-300" />
            </div>
            {/* SHOP BUTTON */}
            <button className=" h-15 w-full rounded-xl bg-[#5433EB] text-[18px] font-semibold text-white transition hover:bg-[#4828d8]">
              Create Account
            </button>

            {/* CHECKBOX */}
            <label className="mt-4 flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                defaultChecked
                className="h-5 w-5 rounded-full accent-pink-500"
              />

              <span className="text-[16px] font-medium text-black">
                Email me order updates & news
              </span>
            </label>

            {/* TERMS */}
            <p className="mt-6 text-center text-[14px] text-gray-500">
              By continuing, you agree to our
              <button className="underline underline-offset-2">
                Terms of service
              </button>
            </p>
          </div>

          {/* PRIVACY */}
          <button className="text-[16px] mt-20 text-pink-500">
            Privacy policy
          </button>
        </div>
      </main>
    </>
  );
}
