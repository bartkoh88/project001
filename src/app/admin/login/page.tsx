"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AdminLoginPage() {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const res = await fetch("/api/admin/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      router.push("/admin")
    } else {
      setError("비밀번호가 올바르지 않습니다.")
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-[#f5f7fa] flex items-center justify-center">
      <div className="bg-white rounded-2xl p-10 w-full max-w-md shadow-sm border border-[#e4e8ef]">
        <div className="mb-8">
          <span className="text-[11px] font-semibold tracking-[0.3em] text-[#2563eb] uppercase">Admin</span>
          <h1 className="text-2xl font-black text-[#080c14] mt-2">NEXCUBECORP</h1>
          <p className="text-sm text-[#8492a6] mt-1">관리자 페이지에 로그인하세요</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[10px] font-semibold tracking-widest text-[#8492a6] uppercase mb-2">
              비밀번호
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-[#f5f7fa] border border-[#e4e8ef] focus:border-[#2563eb] focus:bg-white rounded-xl px-4 py-3.5 text-sm text-[#080c14] outline-none transition-all"
            />
          </div>
          {error && <p className="text-red-500 text-xs">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-[#080c14] hover:bg-[#2563eb] disabled:bg-[#8492a6] text-white text-sm font-bold rounded-xl transition-colors"
          >
            {loading ? "로그인 중..." : "로그인 →"}
          </button>
        </form>
      </div>
    </div>
  )
}
