import { NextResponse } from "next/server";

var post = [
  {
    id: 1,
    title: "NextJS 14",
    description: "A post about Next-js 14",
    image: "nextjs.png",
  },
  {
    id: 2,
    title: "Python",
    description: "A post about Python",
    image: "Python.png",
  },
  {
    id: 3,
    title: "Node js",
    description: "A post about Node JS",
    image: "nodejs.png",
  },

  {
    id: 4,
    title: "Rest API",
    description: "A post about Rest Apis",
    image: "api.png",
  },
];
export const GET = () => {
  return NextResponse.json(post);
};

export const POST = async (req) => {
  const body = await req.json();
  post.push(body);
  return NextResponse.json({ message: "Post added successfully" });
};

export const DELETE = (req) => {
  const id = new URL(req.url).searchParams.get("id");
  post = post.filter((post) => post.id != id);

  return NextResponse.json({
    message: "Post deleted successfully",
  });
};
// to update response
export const PUT = async (req) => {
  const body = await req.json();
  post = post.map((post) => {
    if (post.id == body.id) {
      return body;
    } else {
      return post;
    }
  });
  return NextResponse.json({ message: "Post updated successfully" });
};
