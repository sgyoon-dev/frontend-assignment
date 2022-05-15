import { SerializedStyles } from '@emotion/react'
import { useRef } from 'react'

import useCounter from 'hooks/useCounter'

function NumberCounter({
  endNumber,
  styles,
}: {
  endNumber: number
  styles?: SerializedStyles
}) {
  const counterRef = useRef(null)
  useCounter({ ref: counterRef, endNumber })

  return <span ref={counterRef} css={styles} />
}

export default NumberCounter
