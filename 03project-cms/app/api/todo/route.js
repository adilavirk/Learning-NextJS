import { NextResponse } from "next/server";

export const POST = (req) => {
  const title = new URL(req.url).searchParams.get("title");
  const description = new URL(req.url).searchParams.get("description");
  return NextResponse.json({
    message: "Query REsponse from TOdo",
    data: { title, description },
  });
};
