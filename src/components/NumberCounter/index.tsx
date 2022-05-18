import { SerializedStyles } from '@emotion/react'
import { useRef } from 'react'

import useCounter from 'hooks/useCounter'

interface NumberCounterProps {
  endNumber: number
  styles?: SerializedStyles
}

function NumberCounter({ endNumber, styles }: NumberCounterProps) {
  const counterRef = useRef(null)
  useCounter({ ref: counterRef, endNumber })

  return <span ref={counterRef} css={styles} />
}

export default NumberCounter
