import { cookies } from "next/dist/client/components/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  cookies().set('goal', 'Finish this NextJS walk-through');

  return new NextResponse();
}

export async function DELETE(request: NextRequest) {
  cookies().delete('goal');

  return new NextResponse();
}