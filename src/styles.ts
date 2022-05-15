import { css, keyframes } from '@emotion/react'

import appleIconImage from 'assets/images/badge-apple@4x.png'
import googleIconImage from 'assets/images/play-store@2x.png'
import appIconImage from 'assets/images/triple@2x.png'
import { GRAY_700, GRAY_800 } from 'constants/color'
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

const showAnimationStyles = (delay = 0) => css`
  animation: ${showAnimation} 0.7s;
  animation-delay: ${`${delay}s`};
  animation-fill-mode: both;
`

const backgroundImageStyles = css`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`

const prizeIconStyles = css`
  ${backgroundImageStyles};
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
  ${showAnimationStyles(0.2)};
  display: flex;
  justify-content: space-between;
  width: ${pxToRem(417)};
`

export const appStatisticsList = css`
  ${showAnimationStyles(0.1)};
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
  font-weight: 500;
`

export const appInfo = css`
  ${backgroundImageStyles};
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
