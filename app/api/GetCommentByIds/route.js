import { NextResponse } from "next/server";

// Get a comment by IDs
export async function GET(req) {
  const { transcriptId, commentId } = await req.json(); // Assuming the request includes transcriptId and commentId

  const response = await fetch(
    `https://bsdhdoyb43.execute-api.us-east-1.amazonaws.com/comments/${transcriptId}/${commentId}`,
    {
      method: "GET",
    }
  );

  const result = await response.json();
  return NextResponse.json(result);
}
