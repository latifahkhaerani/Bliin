import { database } from "../config/mongodb";

class ProductModel {
  static collection() {
    return database.collection("Products");
  }

  static async getAll() {
    const product = await this.collection().find().toArray();
    return product;
  }

  static async getBySlug(slug: string) {
    const product = await this.collection().findOne({ slug });
    return product;
  }
}

export default ProductModel;
