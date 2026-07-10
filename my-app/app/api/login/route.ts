import UserModel from "@/db/models/UserModel";
import errorHandler from "@/helpers/errorHandler";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const token = await UserModel.login(body);

    // cookies
    const cookieStore = await cookies();
    cookieStore.set({
      name: "Authorization",
      value: `Bearer ${token}`,
    });

    return Response.json(
      { message: "Login successful", token },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return errorHandler(error);
  }
}
