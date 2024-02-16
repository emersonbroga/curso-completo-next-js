import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "./helpers/session";

export async function middleware(request: NextRequest) {
  const updatedSession = await updateSession();
  if (!updatedSession) return;

  const res = NextResponse.next();
  res.cookies.set(updatedSession);
  return res;
}
