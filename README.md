# 트리플 프론트엔드 포지션 과제

트리플 프론트엔드 포지션 지원 과정에 주어진 사전 과제입니다. 어떻게 과제를 구현하였는지 그 과정과 이유를 정리합니다.

<br />

## 로컬에서 프로젝트를 실행하기

본 레포지토리를 clone 하거나 다운로드한 후, 프로젝트 실행에 필요한 라이브리러리를 설치합니다.

```
npm install
# 혹은
yarn install
```

로컬 개발 서버를 실행 후, http://localhost:3000 에서 프로젝트를 확인합니다.

```
npm dev
# 혹은
yarn dev
```

<br />

## 사용한 툴

- [Vite](https://vitejs.dev/)를 사용하여 React 기반 프로젝트를 빠르게 생성했습니다. 처음에는 [Create React App](https://create-react-app.dev/)을 사용하였으나, 트리플의 린트 설정을 적용하는 과정에서 에러가 발생하는 [이슈](https://github.com/titicacadev/eslint-config-triple/issues/189)를 확인하고 Vite로 다시 프로젝트를 생성했습니다.
- CSS를 JS로 작성할 수 있는 CSS-in-JS 라이브러리 [emotion](https://emotion.sh/)을 사용했습니다.
- emotion으로 작성한 코드를 최적화해주는 [@emotion/babel-plugin](https://github.com/emotion-js/emotion/tree/main/packages/babel-plugin)을 설치했습니다.
- 라이브러리를 사용한 것은 아니지만, 브라우저의 기본 UI 스타일을 없애기 위해 [tailwind css 라이브러리의 base 스타일](https://tailwindcss.com/docs/preflight) 설정을 수정하여 사용했습니다.

<br />

## 요구사항 구현

### 등장 애니메이션

- `opaticy` 속성을 0에서 1로 변화시켜 서서히 영역이 나타나는 느낌을 주었습니다.
- `translateY` 속성을 이용해 원래 영역이 위치한 자리의 `20px` 아래 지점에서부터 제자리로 이동하도록 설정했습니다.
- `animation-delay` 속성을 사용하여 각 영역이 순차적으로 화면에 나타나도록 했습니다. delay 시간은 상수 `ShowAnimationDelay`로 한곳에 모아 관리합니다.

### 숫자가 올라가는 애니메이션

- 브라우저는 화면의 변화를 보통 최대 1초에 60번까지 로딩하므로, 2초간 화면을 변화시키기 알맞은 프레임 수는 약 120회입니다.
- 약 120회 내에 각각 다른 크기의 숫자가 동시에 카운팅을 마쳐야 하므로, 한 프레임에 1씩 숫자를 증가시키는 것이 아니라 목표 숫자를 100%로 보았을 때 현재 프레임 진행도에 따른 도달 숫자를 구하여 화면에 표시해야 합니다.
- 더불어 갈수록 카운팅 속도를 늦추어야 합니다. 고민 끝에 그래프상으로 급하게 상승하다가 완만해지는 애니메이션 함수를 적용해야겠다고 생각했습니다.
- [requestAnimationFrame API](https://developer.mozilla.org/ko/docs/Web/API/Window/requestAnimationFrame)는 기기의 주사율에 따라 브라우저가 화면을 리페인트 할 수 있을 때 매서드를 실행하도록 호출합니다. 이를 이용해 숫자를 카운트하는 함수를 실행했습니다.

#### 참고한 자료

숫자가 올라가는 애니메이션은 countUp 라이브러리와 James Shakespeare의 블로그 포스트를 많이 참고했습니다. 구현 아이디어는 떠올랐으나, 코드로 잘 정리하지 못하고 헤매었을 때 해당 정보를 참고하여 코드로 정리할 수 있었습니다.

- [countUp.js/countUp.ts at master · inorganik/countUp.js · GitHub](https://github.com/inorganik/countUp.js/blob/master/src/countUp.ts)
- [A simple count-up animation with JavaScript - James Shakespeare](https://jshakespeare.com/simple-count-up-number-animation-javascript-react/)
- [Easing 함수 치트 시트](https://easings.net/ko#easeOutCirc)

<br />

## 요구사항 외 구현한 부분

### 스타일 작성 시 사용자 편의 고려하기

- 사용자가 설정한 글자 크기에 따라 디자인이 잘 대응하도록, 대부분의 수치에 `rem` 단위를 사용했습니다. `px` 를 `rem`으로 변경하는 함수 작성해 단위를 변환했습니다.
- 문서의 제목을 `<h1>`으로 표기하여 어떤 내용을 담은 페이지인지 알 수 있도록 했습니다. 화면에는 보이지 않고 접근성 기기 등에만 읽히도록 스타일을 작성했습니다. 해당 스타일은 [How-to: Hide content - The A11Y Project](https://www.a11yproject.com/posts/how-to-hide-content/)에서 참고하였습니다.

### 화면 동작을 줄이는 설정을 한 경우 애니메이션을 끄기

요구사항을 구현하면서 계속 움직이는 화면을 반복적으로 보다 보니, 문득 눈이 상당히 피로해졌음을 느꼈습니다. 동시에 움직이는 자극에 민감하거나 피로감을 느끼는 사용자들을 위해 애니메이션을 끄는 옵션이 있겠다는 생각이 들어 정보를 찾아보았습니다.

- [prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) 미디어 쿼리 값을 이용하면, 사용자가 사용 기기에 불필요한 화면 움직임을 줄이도록 설정했는지 여부를 알 수 있습니다. 이를 이용해 만약 해당 설정이 되어 있는 경우에는 애니메이션이 동작하지 않도록 했습니다.
- 맥 컴퓨터의 경우 시스템 환경설정 > 손쉬운 사용 > 디스플레이 > 동작 줄이기 항목을 선택하여 움직임을 줄이도록 설정할 수 있습니다. 로컬에서 웹사이트를 띄운 후 해당 항목을 설정해보며 기능을 테스트할 수 있습니다.

#### 참고한 자료

- [prefers-reduced-motion: 때로는 움직임이 적을수록 더 많음](https://web.dev/i18n/ko/prefers-reduced-motion/)
- [저사양 디바이스와 웹접근성을 위한 애니메이션 동작 줄이기 미디어쿼리 사용하기: prefers-reduced-motion 소개](https://nuli.navercorp.com/community/article/1132982)
