import { css, keyframes } from '@emotion/react'

import { pxToRem } from 'utils/style'

const showAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(${pxToRem(20)});
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const showAnimationStyles = (delay = 0) => css`
  animation: ${showAnimation} 0.7s;
  animation-delay: ${`${delay}s`};
  animation-fill-mode: both;
`
