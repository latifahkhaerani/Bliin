import ProductModel from "@/db/models/ProductModel";

export async function GET() {
  const product = await ProductModel.getAll();
  //   console.log(product);
  return Response.json(product);
}
