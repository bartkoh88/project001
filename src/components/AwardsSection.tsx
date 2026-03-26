export default function AwardsSection() {
  return (
    <section className="py-28 bg-[#080c14]">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.3em] text-[#60a5fa] uppercase mb-4">
              <span className="w-5 h-px bg-[#60a5fa]" /> Awards
            </span>
            <h2 className="font-black text-4xl md:text-5xl tracking-tight text-white">
              국가가 인정한 브랜드
            </h2>
          </div>
          <p className="text-white/30 text-sm max-w-xs leading-relaxed">
            전국 11,300개 프랜차이즈 브랜드 중 교육 분야 1등급 인증을 받은 단 2개 브랜드 중 하나입니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            { value: "6", unit: "년 연속", label: "우수 프랜차이즈 1등급", sub: "중소벤처기업부" },
            { value: "2", unit: "/11,300", label: "교육 분야 최상위 브랜드", sub: "전국 프랜차이즈 중" },
            { value: "#1", unit: "", label: "교육업계 최초 명예의 전당", sub: "중소벤처기업부 장관 표창" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.08] rounded-3xl px-8 py-10 transition-colors duration-200"
            >
              <p className="font-black text-white tracking-tighter leading-none mb-4"
                 style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}>
                {item.value}
                <span className="text-[#60a5fa] text-2xl font-bold">{item.unit}</span>
              </p>
              <p className="text-sm font-semibold text-white/70 mb-1">{item.label}</p>
              <p className="text-xs text-white/25">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
