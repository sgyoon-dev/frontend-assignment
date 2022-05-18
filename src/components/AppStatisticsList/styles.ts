import { css } from '@emotion/react'

import { ShowAnimationDelay } from 'constants/animation'
import { GRAY } from 'constants/color'
import { showAnimationStyles } from 'styles/animation'
import { pxToRem } from 'utils/style'

export const counter = css`
  font-weight: bold;
`

export const amount = css`
  font-weight: bold;
`

export const appStatistics = css`
  height: ${pxToRem(36)};
  font-size: ${pxToRem(36)};
  line-height: ${pxToRem(36)};
  letter-spacing: -1px;
  color: ${GRAY};
`

export const appStatisticsList = css`
  ${showAnimationStyles(ShowAnimationDelay.appStatisticsList)};
  display: grid;
  grid-row-gap: ${pxToRem(20)};
  margin-bottom: ${pxToRem(50)};
`
