import { NextRequest, NextResponse } from "next/server"

async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(password)
  const hash = await crypto.subtle.digest("SHA-256", data)
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
}

export async function middleware(req: NextRequest): Promise<NextResponse> {
  const { pathname } = req.nextUrl
  const isLoginPage = pathname === "/admin/login"
  const token = req.cookies.get("admin_token")?.value
  const adminPassword = process.env.ADMIN_PASSWORD || "admin1234"
  const validToken = await hashPassword(adminPassword)

  if (isLoginPage) {
    if (token === validToken) {
      return NextResponse.redirect(new URL("/admin", req.url))
    }
    return NextResponse.next()
  }

  if (token !== validToken) {
    return NextResponse.redirect(new URL("/admin/login", req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
