import { css } from '@emotion/react'

// https://www.a11yproject.com/posts/how-to-hide-content/
// 접근성을 보장하며 화면에서 요소를 보이지 않도록 설정하는 스타일
export const visuallyHiddenStyle = css`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export const bgImageCoverStyles = css`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`
