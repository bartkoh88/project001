import { NextRequest, NextResponse } from "next/server"

async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(password)
  const hash = await crypto.subtle.digest("SHA-256", data)
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const { password } = await req.json()
  const adminPassword = process.env.ADMIN_PASSWORD || "admin1234"

  if (password !== adminPassword) {
    return NextResponse.json({ error: "비밀번호가 올바르지 않습니다." }, { status: 401 })
  }

  const token = await hashPassword(adminPassword)
  const res = NextResponse.json({ success: true })
  res.cookies.set("admin_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  })

  return res
}

export async function DELETE(): Promise<NextResponse> {
  const res = NextResponse.json({ success: true })
  res.cookies.delete("admin_token")
  return res
}
