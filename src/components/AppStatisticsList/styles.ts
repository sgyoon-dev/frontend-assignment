import { css } from '@emotion/react'

import { ShowAnimationDelay } from 'constants/animation'
import { GRAY } from 'constants/color'
import { showAnimationStyles } from 'styles/animation'
import { pxToRem } from 'utils/style'

export const strong = css`
  font-weight: 800;
  span {
    font-weight: 800;
  }
`

export const p = css`
  height: ${pxToRem(36)};
  font-size: ${pxToRem(36)};
  line-height: ${pxToRem(36)};
  letter-spacing: -1px;
  font-weight: 500;
  color: ${GRAY};
`

export const appStatisticsList = css`
  ${showAnimationStyles(ShowAnimationDelay.appStatisticsList)};
  display: grid;
  grid-row-gap: ${pxToRem(20)};
  margin-bottom: ${pxToRem(50)};
`
