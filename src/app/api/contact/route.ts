import { createClient } from "@supabase/supabase-js"
import { NextRequest, NextResponse } from "next/server"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SECRET_KEY!
)

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json()
    const { name, phone, email, company, message } = body

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "필수 항목을 입력해 주세요." },
        { status: 400 }
      )
    }

    const { error } = await supabase
      .from("contacts")
      .insert([{ name, phone, email, company, message }])

    if (error) {
      return NextResponse.json(
        { error: "저장 중 오류가 발생했습니다." },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch {
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다." },
      { status: 500 }
    )
  }
}
