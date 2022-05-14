import { css } from '@emotion/react'

import { GRAY_700 } from 'constants/color'
import { pxToRem } from 'utils/style'
import appIconImage from 'assets/images/triple@2x.png'

export const appStatisticsList = css`
  display: grid;
  grid-row-gap: ${pxToRem(20)};
  margin-bottom: ${pxToRem(50)};
`

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
  position: relative;
  width: ${pxToRem(400)};
  height: ${pxToRem(338)};
  background-image: url(${appIconImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
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
