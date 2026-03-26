---
name: commit
description: 변경된 파일을 분석해서 Conventional Commits 형식으로 커밋합니다.
---

현재 변경사항을 확인하고 커밋을 생성하세요.

1. `git diff --staged` 와 `git status` 로 변경사항 파악
2. 변경 내용에 맞는 접두사 선택:
   - `feat:` 새 기능
   - `fix:` 버그 수정
   - `refactor:` 코드 개선 (기능 변화 없음)
   - `style:` 스타일/포맷 변경
   - `docs:` 문서 수정
   - `chore:` 빌드, 설정 변경
3. 커밋 메시지는 한국어로 작성
4. 예시: `feat: 로그인 페이지 소셜 로그인 버튼 추가`

staged 파일이 없으면 변경된 파일을 먼저 staging 할지 물어보세요.
