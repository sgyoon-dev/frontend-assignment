import * as Styles from './styles'

import NumberCounter from 'components/NumberCounter'
import useReduceMotion from 'hooks/useReduceMotion'

function AppStatisticsList() {
  const reduceMotion = useReduceMotion()

  return (
    <div css={Styles.appStatisticsList}>
      <p css={Styles.p}>
        <strong css={Styles.strong}>
          {reduceMotion ? <span>700</span> : <NumberCounter endNumber={700} />}
          만 명
        </strong>
        의 여행자
      </p>
      <p css={Styles.p}>
        <strong css={Styles.strong}>
          {reduceMotion ? <span>100</span> : <NumberCounter endNumber={100} />}
          만 개
        </strong>
        의 여행 리뷰
      </p>
      <p css={Styles.p}>
        <strong css={Styles.strong}>
          {reduceMotion ? <span>470</span> : <NumberCounter endNumber={470} />}
          만 개
        </strong>
        의 여행 일정
      </p>
    </div>
  )
}

export default AppStatisticsList
