import ProductModel from "@/db/models/ProductModel";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const q = searchParams.get("q") || "";

  const products = await ProductModel.getAll(q);

  return Response.json(products);
}
