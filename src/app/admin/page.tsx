"use client"

import { useEffect, useState } from "react"

type Contact = {
  id: string
  name: string
  email: string
  phone: string
  company: string
  message: string
  status: "new" | "read" | "replied"
  created_at: string
}

type FilterType = "all" | "new" | "read" | "replied"

const STATUS_LABEL: Record<Contact["status"], string> = {
  new: "신규",
  read: "읽음",
  replied: "답변완료",
}

const STATUS_COLOR: Record<Contact["status"], string> = {
  new: "bg-blue-100 text-blue-700",
  read: "bg-gray-100 text-gray-600",
  replied: "bg-green-100 text-green-700",
}

export default function AdminPage() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<FilterType>("all")
  const [selected, setSelected] = useState<Contact | null>(null)

  const fetchContacts = async (): Promise<void> => {
    const res = await fetch("/api/admin/contacts")
    const data = await res.json()
    setContacts(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchContacts()
  }, [])

  const updateStatus = async (id: string, status: string): Promise<void> => {
    await fetch(`/api/admin/contacts/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    })
    await fetchContacts()
    setSelected((prev) => (prev?.id === id ? { ...prev, status: status as Contact["status"] } : prev))
  }

  const deleteContact = async (id: string): Promise<void> => {
    if (!confirm("정말 삭제하시겠습니까?")) return
    await fetch(`/api/admin/contacts/${id}`, { method: "DELETE" })
    await fetchContacts()
    if (selected?.id === id) setSelected(null)
  }

  const logout = async (): Promise<void> => {
    await fetch("/api/admin/auth", { method: "DELETE" })
    window.location.href = "/admin/login"
  }

  const handleRowClick = (contact: Contact): void => {
    setSelected(contact)
    if (contact.status === "new") updateStatus(contact.id, "read")
  }

  const filtered = contacts.filter((c) => filter === "all" || c.status === filter)
  const counts = {
    all: contacts.length,
    new: contacts.filter((c) => c.status === "new").length,
    read: contacts.filter((c) => c.status === "read").length,
    replied: contacts.filter((c) => c.status === "replied").length,
  }

  const FILTER_LABELS: Record<FilterType, string> = {
    all: "전체 문의",
    new: "신규",
    read: "읽음",
    replied: "답변완료",
  }

  return (
    <div className="min-h-screen bg-[#f5f7fa]">
      {/* 헤더 */}
      <header className="bg-white border-b border-[#e4e8ef] px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#080c14] rounded-lg flex items-center justify-center">
            <span className="text-white text-xs font-black">N</span>
          </div>
          <div>
            <span className="text-sm font-black text-[#080c14]">NEXCUBECORP</span>
            <span className="text-xs text-[#8492a6] ml-2">문의 관리</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="/" className="text-xs text-[#8492a6] hover:text-[#2563eb] transition-colors">
            사이트 보기 →
          </a>
          <button
            onClick={logout}
            className="text-xs text-[#8492a6] hover:text-red-500 transition-colors"
          >
            로그아웃
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* 통계 카드 */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {(["all", "new", "read", "replied"] as FilterType[]).map((key) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`bg-white rounded-xl p-5 border text-left transition-all ${
                filter === key
                  ? "border-[#2563eb] shadow-sm"
                  : "border-[#e4e8ef] hover:border-[#c0cad8]"
              }`}
            >
              <div
                className={`text-3xl font-black mb-1 ${
                  filter === key ? "text-[#2563eb]" : "text-[#080c14]"
                }`}
              >
                {counts[key]}
              </div>
              <div className="text-xs text-[#8492a6]">{FILTER_LABELS[key]}</div>
            </button>
          ))}
        </div>

        {/* 목록 + 상세 */}
        <div className="flex gap-6">
          {/* 테이블 */}
          <div className="flex-1 bg-white rounded-xl border border-[#e4e8ef] overflow-hidden">
            {loading ? (
              <div className="flex items-center justify-center h-64 text-[#8492a6] text-sm">
                불러오는 중...
              </div>
            ) : filtered.length === 0 ? (
              <div className="flex items-center justify-center h-64 text-[#8492a6] text-sm">
                문의가 없습니다.
              </div>
            ) : (
              <table className="w-full">
                <thead className="bg-[#f5f7fa] border-b border-[#e4e8ef]">
                  <tr>
                    <th className="text-left px-5 py-3 text-[10px] font-semibold tracking-widest text-[#8492a6] uppercase">상태</th>
                    <th className="text-left px-5 py-3 text-[10px] font-semibold tracking-widest text-[#8492a6] uppercase">이름</th>
                    <th className="text-left px-5 py-3 text-[10px] font-semibold tracking-widest text-[#8492a6] uppercase">연락처</th>
                    <th className="text-left px-5 py-3 text-[10px] font-semibold tracking-widest text-[#8492a6] uppercase">회사</th>
                    <th className="text-left px-5 py-3 text-[10px] font-semibold tracking-widest text-[#8492a6] uppercase">접수일</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((contact) => (
                    <tr
                      key={contact.id}
                      onClick={() => handleRowClick(contact)}
                      className={`border-b border-[#e4e8ef] cursor-pointer hover:bg-[#f5f7fa] transition-colors ${
                        selected?.id === contact.id ? "bg-blue-50" : ""
                      }`}
                    >
                      <td className="px-5 py-4">
                        <span className={`text-[10px] font-semibold px-2 py-1 rounded-full ${STATUS_COLOR[contact.status]}`}>
                          {STATUS_LABEL[contact.status]}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-sm font-semibold text-[#080c14]">{contact.name}</td>
                      <td className="px-5 py-4 text-sm text-[#8492a6]">{contact.phone}</td>
                      <td className="px-5 py-4 text-sm text-[#8492a6]">{contact.company || "-"}</td>
                      <td className="px-5 py-4 text-xs text-[#8492a6]">
                        {new Date(contact.created_at).toLocaleDateString("ko-KR")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* 상세 패널 */}
          {selected && (
            <div className="w-80 bg-white rounded-xl border border-[#e4e8ef] p-6 h-fit sticky top-8">
              <div className="flex items-start justify-between mb-5">
                <div>
                  <span className={`text-[10px] font-semibold px-2 py-1 rounded-full ${STATUS_COLOR[selected.status]}`}>
                    {STATUS_LABEL[selected.status]}
                  </span>
                  <h3 className="text-lg font-black text-[#080c14] mt-2">{selected.name}</h3>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="text-[#8492a6] hover:text-[#080c14] text-xl leading-none"
                >
                  ×
                </button>
              </div>

              <div className="space-y-4 mb-6">
                {[
                  { label: "이메일", value: selected.email || "-" },
                  { label: "연락처", value: selected.phone },
                  { label: "회사", value: selected.company || "-" },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <div className="text-[10px] font-semibold tracking-widest text-[#8492a6] uppercase mb-1">{label}</div>
                    <div className="text-sm text-[#080c14]">{value}</div>
                  </div>
                ))}
                <div>
                  <div className="text-[10px] font-semibold tracking-widest text-[#8492a6] uppercase mb-1">문의 내용</div>
                  <div className="text-sm text-[#080c14] bg-[#f5f7fa] rounded-lg p-3 leading-relaxed whitespace-pre-wrap">
                    {selected.message}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-semibold tracking-widest text-[#8492a6] uppercase mb-1">접수일시</div>
                  <div className="text-sm text-[#080c14]">
                    {new Date(selected.created_at).toLocaleString("ko-KR")}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                {selected.status !== "replied" && (
                  <button
                    onClick={() => updateStatus(selected.id, "replied")}
                    className="w-full py-2.5 bg-[#080c14] hover:bg-[#2563eb] text-white text-xs font-bold rounded-lg transition-colors"
                  >
                    답변완료로 변경
                  </button>
                )}
                {selected.status === "replied" && (
                  <button
                    onClick={() => updateStatus(selected.id, "read")}
                    className="w-full py-2.5 bg-[#f5f7fa] hover:bg-[#e4e8ef] text-[#080c14] text-xs font-bold rounded-lg transition-colors"
                  >
                    읽음으로 변경
                  </button>
                )}
                <button
                  onClick={() => deleteContact(selected.id)}
                  className="w-full py-2.5 bg-red-50 hover:bg-red-100 text-red-600 text-xs font-bold rounded-lg transition-colors"
                >
                  삭제
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
