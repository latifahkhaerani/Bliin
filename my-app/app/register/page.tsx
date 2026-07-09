import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
  const handleRegister = async (form: FormData) => {
    "use server";

    const email = form.get("email");
    const username = form.get("username");
    const name = form.get("name");
    const password = form.get("password");

    const data = await fetch("http://localhost:3000/api/register", {
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

    redirect("/login");
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
          <form action={handleRegister} className="mt-10">
            <h2 className="text-[30px] font-bold tracking-tight text-black">
              Sign up
            </h2>

            <p className="mt-1 text-[17px] text-gray-500">
              Sign up or already have an account
            </p>

            {/*  INPUT */}
            <div className="flex mt-6 h-14.5 items-center rounded-xl border border-gray-300 px-4">
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="flex-1 text-[16px] text-black outline-none placeholder:text-gray-500"
              />
            </div>

            <div className="flex mt-6 h-14.5 items-center rounded-xl border border-gray-300 px-4">
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="flex-1 text-[16px] text-black outline-none placeholder:text-gray-500"
              />
            </div>

            <div className="flex mt-6 h-14.5 items-center rounded-xl border border-gray-300 px-4">
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="flex-1 text-[16px] text-black outline-none placeholder:text-gray-500"
              />
            </div>

            <div className="flex h-14.5 mt-5 items-center rounded-xl border border-gray-300 px-4">
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="flex-1 text-[16px] text-black outline-none placeholder:text-gray-500"
              />
            </div>

            <button className=" h-15 mt-6 w-full rounded-xl  text-[18px] font-semibold text-white transition  hover:bg-[#4828d8] bg-[#5433EB]">
              Submit
            </button>

            {/* DIVIDER */}
            <div className="my-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-gray-300" />

              <span className="text-gray-500">or</span>

              <div className="h-px flex-1 bg-gray-300" />
            </div>
            {/* LOGIN BUTTON */}
            <button className=" h-15 w-full rounded-xl  text-[18px] font-semibold text-black transition hover:bg-grey-500 bg-[#f0f0f0]">
              Already have an account?
            </button>

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
