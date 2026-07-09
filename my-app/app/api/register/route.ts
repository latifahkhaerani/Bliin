import UserModel from "@/db/models/UserModel";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = await UserModel.register(body);

    return Response.json({ result });
  } catch (error: unknown) {
    console.log(error);

    const err = error as { message: string; status: number };

    return Response.json({
      message: err.message || "Internal server error",
      status: err.status || 500,
    });
  }
}
