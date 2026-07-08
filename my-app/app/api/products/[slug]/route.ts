import ProductModel from "@/db/models/ProductModel";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await params; // 'a', 'b', or 'c'
    const product = await ProductModel.getBySlug(slug);

    return Response.json(product);
  } catch (error) {
    console.log(error);
  }
}
