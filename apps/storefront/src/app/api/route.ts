import { NextResponse } from "next/server";

export async function GET(): Promise<Response> {
  return NextResponse.json({ message: `Hello, from API! You are: ${Math.random()} guest` });
}
