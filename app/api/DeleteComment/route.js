import { NextResponse } from "next/server";

// Delete a comment
export async function DELETE(req) {
  const { transcriptId, commentId } = await req.json(); // Assuming the request includes transcriptId and commentId

  const response = await fetch(
    `https://bsdhdoyb43.execute-api.us-east-1.amazonaws.com/comments/${transcriptId}/${commentId}`,
    {
      method: "DELETE",
    }
  );

  const result = await response.json();
  return NextResponse.json(result);
}
