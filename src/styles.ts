import { css } from '@emotion/react'

import appIconImage from 'assets/images/triple@2x.png'
import { GRAY_700 } from 'constants/color'
import { DESKTOP_CONTAINER_MAX_WIDTH } from 'constants/layout'
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
`

export const appInfo = css`
  ${bgImageCoverStyles};
  ${showAnimationStyles()};
  position: relative;
  width: ${pxToRem(400)};
  height: ${pxToRem(338)};
  background-image: url(${appIconImage});
`

export const sectionContainer = css`
  display: flex;
  justify-content: space-between;
  width: ${pxToRem(1040)};
  margin: 0 auto;
  padding-top: ${pxToRem(140)};
  padding-bottom: ${pxToRem(74)};
`

export const mainContainer = css`
  min-width: ${pxToRem(DESKTOP_CONTAINER_MAX_WIDTH)};
  margin: 0 auto;
`
