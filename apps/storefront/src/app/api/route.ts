import { NextResponse } from "next/server";

export async function GET(request: Request): Promise<Response> {
  console.log(request);

  return NextResponse.json({ message: `Hello, from API! You are: ${Math.random()} guest` });
}
