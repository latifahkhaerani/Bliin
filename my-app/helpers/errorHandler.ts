import { ZodError } from "zod";

export default function errorHandler(error: unknown) {
  const err = error as { message: string; status: number };

  let message = err.message || "Internal server error";
  let status = err.status || 500;

  //   error zod
  if (error instanceof ZodError) {
    message = error.issues
      .map((e) => {
        //  console.log(e, "isi mappp");
        return e.message;
      })
      .join(", ");
    status = 400;
  }

  return Response.json({
    message,
    status,
  });
}
