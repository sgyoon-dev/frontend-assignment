import { css } from '@emotion/react'

import appleIconImage from 'assets/images/badge-apple@4x.png'
import googleIconImage from 'assets/images/play-store@2x.png'
import { ShowAnimationDelay } from 'constants/animation'
import { GRAY_800 } from 'constants/color'
import { showAnimationStyles } from 'styles/animation'
import { bgImageCoverStyles } from 'styles/common'
import { pxToRem } from 'utils/style'

const prizeIconStyles = css`
  ${bgImageCoverStyles};
  display: block;
  width: ${pxToRem(54)};
  height: ${pxToRem(54)};
  margin-right: ${pxToRem(8)};
`

export const appleIcon = css`
  ${prizeIconStyles};
  background-image: url(${appleIconImage});
`

export const googleIcon = css`
  ${prizeIconStyles};
  background-image: url(${googleIconImage});
`

export const appPrize = css`
  display: flex;
  align-items: center;
  font-size: ${pxToRem(14)};
  line-height: ${pxToRem(22)};
  color: ${GRAY_800};
  font-weight: 800;
`

export const appPrizeList = css`
  ${showAnimationStyles(ShowAnimationDelay.appPrizeList)};
  display: flex;
  justify-content: space-between;
  width: ${pxToRem(417)};
`
