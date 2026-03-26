# VibeCoding2026

## 기술 스택
- Framework: Next.js 16 (App Router)
- Language: TypeScript (strict mode)
- Styling: Tailwind CSS v4
- Package Manager: npm
- Runtime: Node.js 20+
- React: 19

## 프로젝트 구조
```
src/
  app/          # Next.js App Router 페이지
  components/   # 재사용 가능한 UI 컴포넌트
  lib/          # 유틸리티, 헬퍼 함수
  hooks/        # 커스텀 React hooks
  types/        # TypeScript 타입 정의
public/         # 정적 파일
```

## 주요 명령어
- 개발 서버: `npm run dev` (http://localhost:3000)
- 빌드: `npm run build`
- 타입 체크: `npm run type-check`
- 린트: `npm run lint`
- 테스트: `npm test`

## 코딩 규칙
- 들여쓰기: 2칸 (스페이스)
- 따옴표: 더블쿼트 (`"`)
- 세미콜론: 없음
- 컴포넌트: 함수형 컴포넌트만 사용 (화살표 함수)
- 파일명: kebab-case (예: `user-profile.tsx`)
- 컴포넌트명: PascalCase
- 변수/함수명: camelCase

## TypeScript 규칙
- `any` 타입 사용 금지
- 모든 함수에 반환 타입 명시
- `interface` 보다 `type` 선호
- `as` 타입 단언 최소화

## 컴포넌트 작성 규칙
- Server Component 우선, 필요할 때만 `"use client"` 사용
- props 타입은 컴포넌트 파일 상단에 정의
- 각 컴포넌트는 단일 책임 원칙 준수

## Git 규칙
- 커밋 메시지: `feat:`, `fix:`, `refactor:`, `docs:`, `chore:` 접두사 사용
- main 브랜치 직접 커밋 금지
- 기능 브랜치: `feature/기능명`

## 주의사항
- `.env.local` 파일 절대 커밋 금지
- `console.log` 프로덕션 코드에 남기지 않기
- `package-lock.json` 직접 수정 금지
