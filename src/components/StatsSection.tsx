const stats = [
  { value: "2004", label: "설립연도" },
  { value: "222", label: "전국 지점" },
  { value: "$54M", label: "브랜드 매출" },
  { value: "6년", label: "연속 1등급" },
]

export default function StatsSection() {
  return (
    <section className="bg-[#f5f7fa] border-b border-[#e4e8ef]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#e4e8ef]">
          {stats.map((s) => (
            <div key={s.label} className="px-8 py-10 group hover:bg-white transition-colors duration-200">
              <p className="text-4xl md:text-5xl font-black text-[#080c14] tracking-tighter mb-1 group-hover:text-[#2563eb] transition-colors">
                {s.value}
              </p>
              <p className="text-[11px] tracking-widest text-[#8492a6] uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
