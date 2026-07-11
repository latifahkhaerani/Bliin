"use server";
import { cookies } from "next/headers";

export const handleDelete = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("Authorization");
};
