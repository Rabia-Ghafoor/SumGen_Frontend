import { NextResponse } from "next/server";

// Get all transcripts
export async function GET() {
  try {
    const response = await fetch(
      "https://bsdhdoyb43.execute-api.us-east-1.amazonaws.com/transcripts",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error("Failed to fetch transcripts:", error);
    return NextResponse.json(
      { error: "Failed to fetch transcripts" },
      { status: 500 }
    );
  }
}
