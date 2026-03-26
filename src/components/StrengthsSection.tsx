const strengths = [
  { no: "01", title: "공부공식™ 검사", desc: "학습시간·전략·학습법·자기평가를 종합 측정해 학생을 5단계로 진단합니다." },
  { no: "02", title: "VLT 검사", desc: "인지과학 기반 16유형 분류 맞춤 솔루션. 특허 등록 (10-0740152)" },
  { no: "03", title: "CUBE MAP", desc: "의식 통합 맵 기반 학습관리 시스템. 2025년 특허 취득 (10-2818208)" },
  { no: "04", title: "EDUCUBE 앱", desc: "AI 상담 분석 + 학습 계획 실시간 동기화 + 학생·매니저·학부모 통합 대시보드" },
]

export default function StrengthsSection() {
  return (
    <section className="py-28 bg-white border-b border-[#e4e8ef]" id="strengths">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.3em] text-[#2563eb] uppercase mb-4">
              <span className="w-5 h-px bg-[#2563eb]" /> Core Strengths
            </span>
            <h2 className="font-black text-4xl md:text-5xl tracking-tight text-[#080c14]">
              20년이 만들어낸
              <br />핵심 경쟁력
            </h2>
          </div>
        </div>

        <div className="divide-y divide-[#e4e8ef]">
          {strengths.map((s) => (
            <div
              key={s.no}
              className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-12 py-7 hover:bg-[#f5f7fa] px-4 -mx-4 rounded-2xl transition-all duration-200 cursor-default"
            >
              <span className="text-[11px] font-mono text-[#c0cad8] w-6 flex-shrink-0">{s.no}</span>
              <h3 className="text-base font-bold text-[#080c14] group-hover:text-[#2563eb] transition-colors w-52 flex-shrink-0">
                {s.title}
              </h3>
              <p className="text-[#8492a6] text-sm leading-relaxed flex-1">{s.desc}</p>
              <span className="text-[#c0cad8] group-hover:text-[#2563eb] transition-colors text-lg hidden md:block">→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
