import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json({ message: "Get api methid called" });
  //   to return response in html
  // return NextResponse.json({ message: JSON.stringify(page) });
};
export const POST = async (req) => {
  const body = await req.json();
  console.log("body", body);
  return NextResponse.json({
    message: "Post api method called",
    body: body,
  });
};
export const PUT = () => {
  return NextResponse.json({ message: "PUT api method called" });
};
export const DELETE = () => {
  return NextResponse.json({ message: "Delete api method called" });
};
