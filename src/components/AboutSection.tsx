export default function AboutSection() {
  return (
    <section className="py-28 bg-white border-b border-[#e4e8ef]" id="about">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-16 md:gap-24 items-start">
          {/* 왼쪽 */}
          <div className="sticky top-16">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.3em] text-[#2563eb] uppercase mb-6">
              <span className="w-5 h-px bg-[#2563eb]" /> About
            </span>
            <h2 className="font-black text-4xl md:text-5xl leading-[1.08] tracking-tight text-[#080c14]">
              가르치지 않고
              <br />
              스스로 하게
              <br />
              만드는 교육
            </h2>
          </div>

          {/* 오른쪽 */}
          <div className="space-y-10 pt-1">
            <p className="text-[#4a5568] text-lg leading-relaxed">
              2004년 대치동 1호점으로 시작한 넥스큐브코퍼레이션은 한국 최초로 <strong className="text-[#080c14]">직접 가르치지 않는 교육 모델</strong>을 도입했습니다. 20여 년간 중고등학생의 자기주도학습을 이끌어온 전문 기업입니다.
            </p>

            <div className="h-px bg-[#e4e8ef]" />

            <div className="space-y-6">
              {[
                { no: "01", title: "정신 영역", desc: "목표 설정과 내적 동기부여로 올바른 마음가짐을 만듭니다." },
                { no: "02", title: "학습 영역", desc: "과학적으로 검증된 방법론으로 실력을 체계적으로 쌓습니다." },
                { no: "03", title: "행동 영역", desc: "꾸준한 실행과 피드백으로 자기주도 습관을 완성합니다." },
              ].map((item) => (
                <div key={item.no} className="flex gap-6 group cursor-default">
                  <span className="text-[11px] font-mono text-[#c0cad8] mt-0.5 w-6 flex-shrink-0">{item.no}</span>
                  <div>
                    <h3 className="text-sm font-bold text-[#080c14] mb-1 group-hover:text-[#2563eb] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[#8492a6] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
