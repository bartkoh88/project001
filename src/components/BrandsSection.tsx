const brands = [
  {
    no: "01",
    name: "EDUPLEX",
    sub: "에듀플렉스",
    tag: "자기주도학습 관리",
    desc: "매니저와의 1:1 정기 상담을 통해 목표 설정·학습 전략·실행 점검을 통합 관리합니다. 셀프리더™ 플래너, CHAMP 학습법, 데일리 체크 시스템으로 학생이 스스로 공부하는 힘을 키웁니다.",
    points: ["주 1회 1:1 맞춤 상담", "셀프리더™ 학습 플래너", "CHAMP 자기주도학습법", "데일리 체크 시스템"],
    bg: "bg-[#eff6ff]",
    accent: "text-[#2563eb]",
    tagBg: "bg-[#dbeafe] text-[#1d4ed8]",
  },
  {
    no: "02",
    name: "EDUCOACH",
    sub: "에듀코치",
    tag: "개별지도",
    desc: "2007년 일본 Meiko Network Japan과 독점 계약 체결. 강의식·주입식을 탈피해 학생이 직접 개념을 설명하는 질문학습법으로 메타인지 능력을 키워 진짜 실력을 만듭니다.",
    points: ["질문학습법 기반 수업", "메타인지 능력 향상", "1:1 맞춤형 개별지도", "Meiko Network Japan 파트너십"],
    bg: "bg-[#080c14]",
    accent: "text-white",
    tagBg: "bg-white/10 text-white/70",
  },
]

export default function BrandsSection() {
  return (
    <section className="py-28 bg-[#f5f7fa] border-b border-[#e4e8ef]" id="brands">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        {/* 헤더 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.3em] text-[#2563eb] uppercase mb-4">
              <span className="w-5 h-px bg-[#2563eb]" /> Brands
            </span>
            <h2 className="font-black text-4xl md:text-5xl tracking-tight text-[#080c14]">
              두 브랜드, 하나의 철학
            </h2>
          </div>
          <p className="text-[#8492a6] text-sm max-w-xs leading-relaxed">
            에듀플렉스와 에듀코치는 동일한 교육 철학을 기반으로 하나의 공간에서 운영됩니다.
          </p>
        </div>

        {/* 브랜드 카드 */}
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {brands.map((b) => (
            <div key={b.name} className={`${b.bg} rounded-3xl p-10 group transition-transform duration-300 hover:-translate-y-1`}>
              <div className="flex justify-between items-start mb-8">
                <span className={`text-[10px] font-mono ${b.accent} opacity-40`}>{b.no}</span>
                <span className={`text-[10px] tracking-widest font-semibold uppercase px-3 py-1.5 rounded-full ${b.tagBg}`}>
                  {b.tag}
                </span>
              </div>
              <h3 className={`text-5xl font-black tracking-tighter mb-1 ${b.accent}`}>{b.name}</h3>
              <p className={`text-sm mb-8 ${b.no === "02" ? "text-white/40" : "text-[#8492a6]"}`}>{b.sub}</p>
              <p className={`text-sm leading-relaxed mb-10 ${b.no === "02" ? "text-white/60" : "text-[#4a5568]"}`}>{b.desc}</p>
              <ul className="space-y-2.5">
                {b.points.map((p) => (
                  <li key={p} className={`flex items-center gap-3 text-xs ${b.no === "02" ? "text-white/40" : "text-[#8492a6]"}`}>
                    <span className={`w-5 h-px ${b.no === "02" ? "bg-white/20" : "bg-[#2563eb]/30"}`} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 시너지 배너 */}
        <div className="bg-white border border-[#e4e8ef] rounded-3xl px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[10px] tracking-[0.3em] text-[#2563eb] font-semibold uppercase mb-2">Synergy</p>
            <p className="text-lg font-bold text-[#080c14]">두 프로그램을 함께 이용하는 프리미엄 고객</p>
          </div>
          <div className="text-right">
            <p className="text-6xl font-black text-[#080c14] tracking-tighter leading-none">
              52.9<span className="text-[#2563eb]">%</span>
            </p>
            <p className="text-xs text-[#8492a6] mt-1">2025년 기준</p>
          </div>
        </div>
      </div>
    </section>
  )
}
