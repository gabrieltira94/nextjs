import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  const res = (await fetch('https://api.publicapis.org/entries'));
  const body = await res.json();

  if (id)
    body.testId = id;

  return NextResponse.json(body);
}

