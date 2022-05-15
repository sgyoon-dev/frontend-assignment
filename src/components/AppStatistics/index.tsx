import { useRef } from 'react'

import * as Styles from './styles'

import useCounter from 'hooks/useCounter'

function AppStatistics({
  endNumber,
  unit,
  object,
}: {
  endNumber: number
  unit: string
  object: string
}) {
  const counterRef = useRef(null)
  useCounter({ ref: counterRef, endNumber })

  return (
    <p css={Styles.p}>
      <strong css={Styles.strong}>
        <span ref={counterRef} />만 {unit}
      </strong>
      의 {object}
    </p>
  )
}

export default AppStatistics
