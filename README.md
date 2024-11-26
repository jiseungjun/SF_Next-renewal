### 스나이퍼팩토리 NEXT.js 4기 교육과정

### 프로젝트 설명

1. Shadcn UI 공식문서의 CLI를 통해 NEXT.js 프로젝트를 생성합니다. 하기에 작성한 명령어를 통해 설치해줍니다. 또한, 모든 기본 설정을 통해 진행하였습니다.
   <br /> 단, 컬러 테마는 본인의 취향에 맞게 선택해주십시오. - npx shadcn@latest init -

안녕하세요, '구디사는 개발자 9Diin' 입니다. <br />
<br />
해당 프로젝트는 NEXT.js (14버전)과 Supabase, 그리고 Markdown Editor 라이브러리를 사용하여 CRUD(Create, Read, Update, Delete) 기능을 구현한 나만의 TODO-LIST 및 TODO-BOARD를 구현해보는 예제 프로젝트입니다. <br />
<br />
해당 프로젝트는 전적으로 Shadcn UI 디자인 시스템을 사용하여 UI/UX 개발을 진행하였습니다. <br />
해당 프로젝트의 디자인은 전적으로 필자(구디사는 개발자)의 개인 작업물이며, 무단 복제 배포를 금지합니다. <br />
<br />
그러나 `코드의 재사용 및 배포는 전적으로 모든 영역에서 허용`합니다. 감사합니다. <br />
그러면 프로젝트 개발을 위한 `프로젝트 생성`, `개발환경 세팅` 등과 같은 각 단계별 커리큘럼을 작성해보도록 하겠습니다.

---

### 프로젝트 환경설정

1. Shadcn UI 공식문서의 CLI를 통해 NEXT.js 프로젝트를 생성합니다. 하기에 작성한 명령어를 통해 설치해줍니다. 또한, 모든 기본 설정을 통해 진행하였습니다. <br />
   단, 컬러 테마는 본인의 취향에 맞게 선택해주십시오.

-   npx shadcn@latest init
-   전반적인 폰트는 Google Font의 `Noto Sans KR` 폰트를 사용했습니다. (feat. app > layout.tsx 파일 참조)
-   필수 컴포넌트 설치

    -   `npx shadcn@latest add alert-dialog`
    -   `npx shadcn@latest add button`
    -   `npx shadcn@latest add calendar`
    -   `npx shadcn@latest add card`
    -   `npx shadcn@latest add checkbox`
    -   `npx shadcn@latest add dialog`
    -   `npx shadcn@latest add input`
    -   `npx shadcn@latest add popover`
    -   `npx shadcn@latest add progress`
    -   `npx shadcn@latest add toast`
    -   `npx shadcn@latest add separator`
    -   `npx shadcn@latest add label`

-   SASS/SCSS 설치: `npm i sass`
-   React 마크다운 에디터 설치: `npm i @uiw/react-markdown-editor`
-   Supabase 연동을 위한 라이브러리 설치: `npm install @supabase/supabase-js`

2. 프로젝트 구조

-   App Router 기반 페이지 라우팅이 이루어지니 만큼 `app` 폴더 하위에는 페이지에 관련된 파일이 위치합니다.
-   `public` 폴더를 따로 생성하여 assets와 styles 폴더를 생성하였습니다.
    -   assets: 정적 자원을 관리합니다. (예: 이미지, 아이콘, 폰트 등)
    -   styles: CSS 파일을 관리합니다. (해당 프로젝트는 교육과정이니 만큼 Tailwind CSS와 SCSS를 섞어 진행합니다.)
-   `components` 폴더에서는 해당 프로젝트에서 Base UI되는 컴포넌트들이 설치되어 관리됩니다. ui 폴더 참고해주세요.
-   Supabase 연동을 위한 개인의 API_KEY와 BASE_URL은 `.env.local` 파일에서 관리되기 때문에 깃허브에 따로 업로드 되지 않습니다. Supabase 공식문서를 참고하세요.

---

### 커리큘럼

1. 프로젝트 생성 및 프로젝트 환경설정 (feat. Shadcn UI로 베이스 UI 컴포넌트 설치)

    - `#1-install` branch를 참고해주세요.

2. Init Page(최초 진입 페이지) UI 개발하기

    - `#2-ui-init` branch를 참고해주세요.

3. Board Unique Page By Id(Board ID에 따른 동적 라우팅 페이지) UI 개발하기

    - `#3-ui-board` branch를 참고해주세요.

4. Supabase 연동하기

    - `#4-connect-supabase` branch를 참고하세요.

5. Init Page 기능 개발하기
    - Add New Page 버튼 클릭 시, TASK 생성 및 Supabase 연동하기
    - TASK 생성 후, USER의 TODO-BOARD 텍스트 아래의 데이터 조회하기 (feat. useGetAllTask 훅 사용)
    - `#5-dev-init` branch를 참고하세요.

TODO-BOARD 프로젝트 - AUTH 기능구현 + 프로젝트 디벨롭

---

[회원가입]

1. 회원가입 버튼을 눌렀을 때, 각각의 input value에 대해서 vallidation 체크
2. 이메일 양식이 맞는지, 직접 구현 예정(정규식 활용)
3. 비밀번호 최소 길이 혹은 최대 길이 정하기
4. 유저 중복 확인 (Supabase에서 자동으로 반환을 해주는 것 같지만, 체크해야함!)

[로그인]

1. 로그인 버튼을 눌렀을 때, 각각의 input value에 대해서 vallidation 체크
2. 이메일 양식이 맞는지, 직접 구현 예정(정규식 활용)
3. 유저체크 (DB에 로그인을 시도한 User가 있는지)

-   만약에 있으면 비밀번호 동일여부 체크
-   만약에 없으면 "가입된 계정이 없습니다." 에러 이셉션 반환

4. 비밀번호 찾기 (Supabase - Reset 기능으로 대체)
5. 로그인 성공 시, 반환 된 데이터 Jotai Store에 저장 -> Supabase에서 auth.getUser() 이런 함수로 대체할 수 있는지 체크를 해야봐야함.
6. 새로고침 했을 때, 유저(User) 데이터 유지 (persistance)
7. 토큰 및 세션관리

[로그인 후]

1. 로그인 직후, 뒤로가기 막기
2. 비로그인 시, board 페이지 접근 불가
3. User 데이터가 유지가 되어야 함
4. task 생성 및 board 생성은 해당 유저만 CRUD 기능 권한
5. 유저와 task 사이의 관계성을 연결시키기
6. 로그인 시, 로그인 & 회원가입 페이지 막기
7. 유저 프로필 수정(닉네임 변경, 휴대폰 번호 변경 등)
