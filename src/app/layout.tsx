import type { Metadata } from "next"
import { Noto_Sans_KR } from "next/font/google"
import "./globals.css"

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-noto",
})

export const metadata: Metadata = {
  title: "넥스큐브코퍼레이션 | Life Management",
  description: "대한민국 최초 자기주도학습 전문 기업. 에듀플렉스·에듀코치 브랜드 운영사.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${notoSansKR.variable}`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  )
}
