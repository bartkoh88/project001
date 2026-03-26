"use client"

import { useState } from "react"

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col justify-center h-64">
        <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.3em] text-[#2563eb] uppercase mb-4">
          <span className="w-5 h-px bg-[#2563eb]" /> Submitted
        </span>
        <h3 className="text-3xl font-black text-[#080c14] mb-3">문의가 접수되었습니다.</h3>
        <p className="text-[#8492a6] text-sm mb-8">빠른 시일 내에 연락드리겠습니다.</p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", message: "" }) }}
          className="text-xs text-[#8492a6] hover:text-[#2563eb] transition-colors text-left"
        >
          다시 문의하기 →
        </button>
      </div>
    )
  }

  const inputClass =
    "w-full bg-[#f5f7fa] border border-[#e4e8ef] focus:border-[#2563eb] focus:bg-white rounded-xl px-4 py-3.5 text-sm text-[#080c14] placeholder-[#c0cad8] outline-none transition-all duration-200"

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[10px] font-semibold tracking-widest text-[#8492a6] uppercase mb-2">이름 *</label>
          <input type="text" required value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="홍길동" className={inputClass} />
        </div>
        <div>
          <label className="block text-[10px] font-semibold tracking-widest text-[#8492a6] uppercase mb-2">연락처 *</label>
          <input type="tel" required value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="010-0000-0000" className={inputClass} />
        </div>
      </div>
      <div>
        <label className="block text-[10px] font-semibold tracking-widest text-[#8492a6] uppercase mb-2">이메일</label>
        <input type="email" value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="example@email.com" className={inputClass} />
      </div>
      <div>
        <label className="block text-[10px] font-semibold tracking-widest text-[#8492a6] uppercase mb-2">문의 내용 *</label>
        <textarea required rows={4} value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="문의하실 내용을 입력해 주세요."
          className={`${inputClass} resize-none`} />
      </div>
      <button type="submit"
        className="w-full py-4 bg-[#080c14] hover:bg-[#2563eb] text-white text-sm font-bold rounded-xl transition-colors duration-200 tracking-wide">
        문의 보내기 →
      </button>
    </form>
  )
}
