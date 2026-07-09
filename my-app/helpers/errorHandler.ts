export default function errorHandler(error: unknown) {
  const err = error as { message: string; status: number };

  return Response.json({
    message: err.message || "Internal server error",
    status: err.status || 500,
  });
}
