const countries = [
  { code: "KR", name: "대한민국", detail: "직영 15 + 가맹 207개 지점", since: "2004", active: true },
  { code: "JP", name: "일본", detail: "도쿄 미타 1호점 운영 중", since: "2024", active: true },
  { code: "TW", name: "대만", detail: "개별지도 프로그램 전개 중", since: "진출 중", active: false },
]

export default function GlobalSection() {
  return (
    <section className="py-28 bg-[#f5f7fa] border-b border-[#e4e8ef]" id="global">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.3em] text-[#2563eb] uppercase mb-4">
              <span className="w-5 h-px bg-[#2563eb]" /> Global
            </span>
            <h2 className="font-black text-4xl md:text-5xl tracking-tight text-[#080c14]">
              한국을 넘어 아시아로
            </h2>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-[#e4e8ef] overflow-hidden divide-y divide-[#e4e8ef]">
          {countries.map((c) => (
            <div
              key={c.code}
              className="flex items-center justify-between px-8 py-7 group hover:bg-[#eff6ff] transition-colors duration-200"
            >
              <div className="flex items-center gap-8">
                <span className="text-[11px] font-mono text-[#c0cad8] w-6">{c.code}</span>
                <h3 className="text-xl font-bold text-[#080c14] group-hover:text-[#2563eb] transition-colors">{c.name}</h3>
                <span className="hidden md:block text-sm text-[#8492a6]">{c.detail}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold text-[#8492a6]">{c.since}</span>
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${c.active ? "bg-[#2563eb]" : "bg-[#c0cad8]"}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
