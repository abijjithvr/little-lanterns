import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";

export async function GET() {
  try {
    const user = await getCurrentUser();
    if (!user) return NextResponse.json({ success: true, user: null });
    return NextResponse.json({ success: true, user: { id: user.id, username: user.username, email: user.email, createdAt: user.createdAt } });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, user: null, error: "Server error" }, { status: 500 });
  }
}
