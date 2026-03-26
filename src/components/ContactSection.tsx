import ContactForm from "@/components/ContactForm"

const info = [
  { label: "대표이사", value: "고승재" },
  { label: "설립", value: "2004년 1월 1일" },
  { label: "주소", value: "서울시 금천구 가산디지털1로 128 STX-V Tower 1006호" },
  { label: "전화", value: "+82 2 555 0567" },
  { label: "웹사이트", value: "www.eduplex.net" },
  { label: "사업자번호", value: "120-86-61080" },
]

export default function ContactSection() {
  return (
    <footer className="bg-white border-t border-[#e4e8ef]" id="contact">
      <div className="py-28">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-2 gap-20 items-start">
            {/* 왼쪽 */}
            <div>
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.3em] text-[#2563eb] uppercase mb-6">
                <span className="w-5 h-px bg-[#2563eb]" /> Contact
              </span>
              <h2 className="font-black text-4xl md:text-5xl tracking-tight text-[#080c14] mb-8 leading-[1.08]">
                함께<br />시작하세요
              </h2>
              <p className="text-[#8492a6] text-sm leading-relaxed mb-10">
                가맹 문의, 사업 제휴, 기타 궁금하신 사항을 아래 양식으로 보내주시면 빠르게 답변드리겠습니다.
              </p>
              <div className="space-y-3 text-sm">
                {[
                  { label: "전화", value: "+82 2 555 0567" },
                  { label: "웹", value: "www.eduplex.net" },
                  { label: "주소", value: "서울시 금천구 가산디지털1로 128 STX-V Tower 1006호" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <span className="text-[#2563eb] font-semibold w-8 flex-shrink-0">{item.label}</span>
                    <span className="text-[#4a5568]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 오른쪽 폼 */}
            <ContactForm />
          </div>
        </div>
      </div>

      {/* 푸터 하단 */}
      <div className="border-t border-[#e4e8ef] py-8">
        <div className="max-w-7xl mx-auto px-8 md:px-16 flex flex-col md:flex-row justify-between gap-4">
          <div className="flex flex-wrap gap-x-8 gap-y-1">
            {info.map((item) => (
              <span key={item.label} className="text-[11px] text-[#c0cad8]">
                {item.label} <span className="text-[#8492a6]">{item.value}</span>
              </span>
            ))}
          </div>
          <p className="text-[11px] text-[#c0cad8] whitespace-nowrap">
            © 2004 NEXCUBECORP., INC.
          </p>
        </div>
      </div>
    </footer>
  )
}
