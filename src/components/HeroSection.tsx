export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-white flex flex-col">
      {/* 네비 */}
      <nav className="flex justify-between items-center px-8 md:px-16 py-7 border-b border-[#e4e8ef]">
        <span className="text-xs font-bold tracking-[0.25em] text-[#080c14] uppercase">
          Nexcubecorp
        </span>
        <a
          href="#contact"
          className="text-xs font-semibold tracking-wider text-[#2563eb] hover:underline underline-offset-4 uppercase"
        >
          문의하기 →
        </a>
      </nav>

      {/* 메인 */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 py-20">
        {/* 태그라인 */}
        <div className="animate-fade-up delay-100 flex items-center gap-3 mb-10">
          <span className="inline-block w-8 h-px bg-[#2563eb]" />
          <span className="text-[11px] font-semibold tracking-[0.35em] text-[#2563eb] uppercase">
            Since 2004 · 222 Branches
          </span>
        </div>

        {/* 대형 타이포 */}
        <h1 className="animate-fade-up delay-200 font-black tracking-[-0.04em] leading-[0.92] text-[#080c14] mb-10"
            style={{ fontSize: "clamp(4rem, 12vw, 11rem)" }}>
          Life<br />
          <span className="text-[#2563eb]">Management</span>
        </h1>

        {/* 설명 + CTA */}
        <div className="animate-fade-up delay-300 flex flex-col md:flex-row md:items-end justify-between gap-8 max-w-5xl">
          <p className="text-[#8492a6] text-base leading-relaxed max-w-sm">
            올바른 사고방식 · 올바른 방법 · 꾸준한 실천.
            <br />
            학생의 정신·학습·행동을 통합 관리하는
            <br />
            대한민국 최초 자기주도학습 전문 기업.
          </p>
          <div className="flex gap-4">
            <a
              href="#brands"
              className="px-7 py-3.5 bg-[#080c14] text-white text-sm font-semibold rounded-full hover:bg-[#2563eb] transition-colors duration-200"
            >
              브랜드 보기
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 border border-[#e4e8ef] text-[#080c14] text-sm font-semibold rounded-full hover:border-[#2563eb] hover:text-[#2563eb] transition-colors duration-200"
            >
              문의하기
            </a>
          </div>
        </div>
      </div>

      {/* 하단 스트립 */}
      <div className="border-t border-[#e4e8ef] px-8 md:px-16 py-4 flex justify-between text-[10px] tracking-widest text-[#c0cad8] uppercase">
        <span>NEXCUBECORP., INC.</span>
        <span>EDUPLEX · EDUCOACH</span>
        <span>www.eduplex.net</span>
      </div>
    </section>
  )
}
