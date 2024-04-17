import { NextResponse } from "next/server";

export async function GET() {
  const script = `
  console.log('This is a JavaScript script');
  alert('Hello, world!');
`;

  return new NextResponse(script, {
    headers: {
      "Content-Type": "application/javascript",
    },
  });
}
