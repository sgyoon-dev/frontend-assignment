import { RefObject, useEffect } from 'react'

import { easeOutExpo } from 'utils/counter'

const ANIMATION_DURATION = 2000

const useCounter = ({
  ref,
  endNumber,
}: {
  ref: RefObject<HTMLSpanElement>
  endNumber: number
}) => {
  useEffect(() => {
    let currentFrame = 0
    const frameDuration = 1000 / 60
    const totalFrame = Math.round(ANIMATION_DURATION / frameDuration)

    const animateCount = () => {
      const counter = requestAnimationFrame(() => {
        currentFrame = currentFrame + 1
        const progressPercent = easeOutExpo(currentFrame / totalFrame)
        const currentNumber = Math.floor(endNumber * progressPercent)

        if (ref.current) {
          ref.current.textContent = `${currentNumber}`
        }

        if (currentFrame === totalFrame) {
          cancelAnimationFrame(counter)
        } else {
          animateCount()
        }
      })
    }

    animateCount()
  }, [endNumber, ref])
}

export default useCounter
