import { css } from '@emotion/react'

import appIconImage from 'assets/images/triple@2x.png'
import { GRAY_700 } from 'constants/color'
import { showAnimationStyles } from 'styles/animation'
import { bgImageCoverStyles } from 'styles/common'
import { pxToRem } from 'utils/style'

export const appInfoText = css`
  position: absolute;
  bottom: ${pxToRem(40)};
  left: 50%;
  transform: translateX(-50%);
  display: block;
  font-size: ${pxToRem(15)};
  color: ${GRAY_700};
  font-weight: 500;
`

export const appInfo = css`
  ${bgImageCoverStyles};
  ${showAnimationStyles()};
  position: relative;
  width: ${pxToRem(400)};
  height: ${pxToRem(338)};
  background-image: url(${appIconImage});
`

export const section = css`
  display: flex;
  justify-content: space-between;
  width: ${pxToRem(1040)};
  margin: 0 auto;
  padding-top: ${pxToRem(140)};
  padding-bottom: ${pxToRem(74)};
`

export const main = css`
  min-width: ${pxToRem(1200)};
  margin: 0 auto;
`
