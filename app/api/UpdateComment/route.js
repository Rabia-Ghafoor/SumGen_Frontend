import { NextResponse } from "next/server";

export async function PUT(req) {
  const data = await req.json();
  const results = await index.query({
    topK: 3,
    includeMetadata: true,
    vector: embedding.data[0].embedding,
  });

  return new NextResponse(stream);
}
