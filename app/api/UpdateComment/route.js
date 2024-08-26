import { NextResponse } from "next/server";

// Update a comment
export async function PUT(req) {
  const data = await req.json();
  const { transcriptId, commentId } = data;

  const response = await fetch(
    `https://bsdhdoyb43.execute-api.us-east-1.amazonaws.com/comments/${transcriptId}/${commentId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: data.text }),
    }
  );

  const result = await response.json();
  return NextResponse.json(result);
}
