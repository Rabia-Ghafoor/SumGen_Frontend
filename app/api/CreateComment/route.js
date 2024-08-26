// Create a comment
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();

  const response = await fetch(
    "https://bsdhdoyb43.execute-api.us-east-1.amazonaws.com/comments",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const result = await response.json();
  return NextResponse.json(result);
}
