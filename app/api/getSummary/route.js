import { NextResponse } from "next/server";

// Get summary
export async function GET(req) {
  const { transcriptId } = await req.json(); // Assuming the request includes transcriptId

  const response = await fetch(
    `https://bsdhdoyb43.execute-api.us-east-1.amazonaws.com/transcripts/summary/${transcriptId}`,
    {
      method: "GET",
    }
  );

  const result = await response.json();
  return NextResponse.json(result);
}
