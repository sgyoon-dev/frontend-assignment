import { useEffect, useState } from 'react'

// 사용자가 애니메이션 등 화면의 동작을 줄이는 옵션을 기기에 설정하고 있는지 여부를 알아보기
const useReduceMotion = () => {
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const hasReduceMotionSetting = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    )
    setReduceMotion(!hasReduceMotionSetting || hasReduceMotionSetting.matches)

    const changeReduceMotionState = () => {
      setReduceMotion(hasReduceMotionSetting.matches)
    }

    // 설정에 변화가 있는지 감지
    hasReduceMotionSetting.addEventListener('change', changeReduceMotionState)

    return () =>
      hasReduceMotionSetting.removeEventListener(
        'change',
        changeReduceMotionState,
      )
  }, [])

  return reduceMotion
}

export default useReduceMotion
