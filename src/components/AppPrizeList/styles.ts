import { css } from '@emotion/react'

import { ShowAnimationDelay } from 'constants/animation'
import { GRAY_800 } from 'constants/color'
import { showAnimationStyles } from 'styles/animation'
import { pxToRem } from 'utils/style'

export const icon = css`
  width: ${pxToRem(54)};
  height: ${pxToRem(54)};
  margin-right: ${pxToRem(8)};
`

export const appPrize = css`
  display: flex;
  align-items: center;
  font-size: ${pxToRem(14)};
  line-height: ${pxToRem(22)};
  color: ${GRAY_800};
  font-weight: 800;
  white-space: pre-line;
`

export const appPrizeList = css`
  ${showAnimationStyles(ShowAnimationDelay.appPrizeList)};
  display: flex;
  justify-content: space-between;
  width: ${pxToRem(417)};
`
