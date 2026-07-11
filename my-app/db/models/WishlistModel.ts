import { ObjectId } from "mongodb";
import { database } from "../config/mongodb";

class WishlistModel {
  static collection() {
    return database.collection("Wishlists");
  }

  static async getByUserId(userId: string) {
    const wishlists = await this.collection()
      .aggregate([
        {
          $match: {
            userId: new ObjectId(userId),
          },
        },
        {
          $lookup: {
            from: "Products",
            localField: "productId",
            foreignField: "_id",
            as: "product",
          },
        },
        {
          $unwind: "$product",
        },
      ])
      .toArray();
    console.log(JSON.stringify(wishlists, null, 2));
    return wishlists;
  }

  static async add(userId: string, productId: string) {
    console.log("Checking duplicate...");

    console.log({
      userId,
      productId,
    });

    const findWishlist = await this.collection().findOne({
      userId: new ObjectId(userId),
      productId: new ObjectId(productId),
    });

    console.log("Duplicate result:", findWishlist);

    if (findWishlist) {
      throw {
        message: "Product already in wishlist",
        status: 400,
      };
    }

    return await this.collection().insertOne({
      userId: new ObjectId(userId),
      productId: new ObjectId(productId),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
}

export default WishlistModel;
