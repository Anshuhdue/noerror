import { NextRequest, NextResponse } from 'next/server';

// Example handler for a GET request
export async function GET(req: NextRequest) {
  return NextResponse.json({ message: 'Hello from the GET request!' });
}

// Example handler for a POST request
export async function POST(req: NextRequest) {
  const data = await req.json(); // assuming you want to handle POST data
  return NextResponse.json({ message: 'Hello from the POST request!', data });
}