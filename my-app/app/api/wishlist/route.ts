import WishlistModel from "@/db/models/WishlistModel";
import errorHandler from "@/helpers/errorHandler";

export async function GET(request: Request) {
  try {
    const userId = request.headers.get("x-user-id");

    if (!userId) {
      throw {
        message: "Unauthorized",
        status: 401,
      };
    }

    const wishlists = await WishlistModel.getByUserId(userId);

    return Response.json(wishlists, {
      status: 200,
    });
  } catch (error) {
    return errorHandler(error);
  }
}

export async function POST(request: Request) {
  try {
    const userId = request.headers.get("x-user-id");

    if (!userId) {
      throw {
        message: "Unauthorized",
        status: 401,
      };
    }
    // console.log("=== POST WISHLIST ===");
    // console.log("Logged in user:", userId);

    const body = await request.json();

    // console.log("Product:", body.productId);

    // simpan ke wishlist
    const result = await WishlistModel.add(userId as string, body.productId);

    return Response.json(
      {
        message: "Product added to wishlist",
        id: result.insertedId,
      },
      { status: 200 },
    );
  } catch (error) {
    return errorHandler(error);
  }
}

export async function DELETE(request: Request) {
  try {
    const userId = request.headers.get("x-user-id")!;
    const { productId } = await request.json();

    await WishlistModel.remove(userId, productId);

    return Response.json({
      message: "Wishlist removed",
    });
  } catch (error) {
    return errorHandler(error);
  }
}
