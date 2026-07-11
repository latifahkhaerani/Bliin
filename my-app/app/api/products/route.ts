import ProductModel from "@/db/models/ProductModel";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const q = searchParams.get("q") || "";

  // infinite scroll
  const page = Number(searchParams.get("page")) || 1;

  const products = await ProductModel.getAll(q, page);

  return Response.json(products);
}
