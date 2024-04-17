import { NextResponse } from "next/server";

export async function GET(req) {
  console.log(
    "received page land event from client",
    req,
    req.headers.get("x-forwarded-for")
  );
  return NextResponse.json({
    status: "Page land event Logged",
    ip: req.headers.get("x-forwarded-for")
  });
}
