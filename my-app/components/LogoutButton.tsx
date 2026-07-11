"use client";

import { handleDelete } from "@/actions";


export default function LogoutButton() {

  return (
    <button
      onClick={async () => {
        await handleDelete();
      }}
      type="button"
      className="block w-full rounded-md px-4 py-2 text-left text-abu hover:bg-gray-100"
    >
      Logout
    </button>
  );
}
