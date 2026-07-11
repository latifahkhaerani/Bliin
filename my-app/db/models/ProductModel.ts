import { database } from "../config/mongodb";

class ProductModel {
  static collection() {
    return database.collection("Products");
  }

  static async getAll(keyword: string) {
    const query =
      keyword === ""
        ? {}
        : {
            $or: [
              {
                name: {
                  $regex: keyword,
                  $options: "i",
                },
              },
              {
                tags: {
                  $regex: keyword,
                  $options: "i",
                },
              },
            ],
          };

    return await this.collection().find(query).toArray();
  }

  static async getBySlug(slug: string) {
    const product = await this.collection().findOne({ slug });
    return product;
  }
}

export default ProductModel;
