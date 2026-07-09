import UserModel from "@/db/models/UserModel";
import errorHandler from "@/helpers/errorHandler";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = await UserModel.register(body);

    return Response.json({ result });
  } catch (error) {
    console.log(error);
    return errorHandler(error);
  }
}
