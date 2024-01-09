import { NextResponse } from "next/server";

export const GET = (req, route) => {
  //   console.log("route", route.params);
  return NextResponse.json({
    // message: "Get method api/users/dynamic-path",
    message: `Get method api/users/dynamic-path/ ${route.params.userName}`,
    // param: route.params.userName,
  });
};
