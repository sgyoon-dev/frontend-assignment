import { css } from '@emotion/react'

import { GRAY } from 'constants/color'
import { pxToRem } from 'utils/style'

export const strong = css`
  font-weight: bold;
  span {
    font-weight: bold;
  }
`

export const p = css`
  height: ${pxToRem(36)};
  font-size: ${pxToRem(36)};
  letter-spacing: -1px;
  font-weight: 500;
  color: ${GRAY};
`
