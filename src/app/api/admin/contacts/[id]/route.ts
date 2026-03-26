import { createClient } from "@supabase/supabase-js"
import { NextRequest, NextResponse } from "next/server"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SECRET_KEY!
)

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  const { id } = await params
  const { status } = await req.json()

  const { error } = await supabase
    .from("contacts")
    .update({ status })
    .eq("id", id)

  if (error) {
    return NextResponse.json({ error: "업데이트 실패" }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  const { id } = await params

  const { error } = await supabase
    .from("contacts")
    .delete()
    .eq("id", id)

  if (error) {
    return NextResponse.json({ error: "삭제 실패" }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
