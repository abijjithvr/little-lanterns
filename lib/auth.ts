import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

const jwtOptions = { expiresIn: "30d" } as const;
const cookieOptions = ["HttpOnly", "Path=/", "Max-Age=2592000", "SameSite=Lax", process.env.NODE_ENV === "production" ? "Secure" : undefined]
  .filter(Boolean)
  .join("; ");

function getJwtSecret(): string | null {
  return process.env.JWT_SECRET ?? null;
}

export function generateToken(userId: string) {
  const secret = getJwtSecret();
  if (!secret) {
    throw new Error("JWT_SECRET is not set. Set the JWT_SECRET environment variable.");
  }
  return jwt.sign({ userId }, secret, jwtOptions);
}

export function verifyToken(token: string) {
  const secret = getJwtSecret();
  if (!secret) return null;
  try {
    return jwt.verify(token, secret) as unknown as { userId: string };
  } catch {
    return null;
  }
}

export async function getCurrentUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) return null;

  const payload = verifyToken(token);
  if (!payload) return null;

  return prisma.user.findUnique({ where: { id: payload.userId } });
}

export function setTokenCookie(response: NextResponse, token: string) {
  response.headers.set("Set-Cookie", `token=${token}; ${cookieOptions}`);
  return response;
}

export function clearTokenCookie(response: NextResponse) {
  response.headers.set("Set-Cookie", `token=; HttpOnly; Path=/; Max-Age=0; SameSite=Lax${process.env.NODE_ENV === "production" ? "; Secure" : ""}`);
  return response;
}
