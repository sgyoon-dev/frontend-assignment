import * as Styles from './styles'

import NumberCounter from 'components/NumberCounter'

function AppStatisticsList() {
  return (
    <div css={Styles.appStatisticsList}>
      <p css={Styles.p}>
        <strong css={Styles.strong}>
          <NumberCounter endNumber={700} />만 명
        </strong>
        의 여행자
      </p>
      <p css={Styles.p}>
        <strong css={Styles.strong}>
          <NumberCounter endNumber={100} />만 개
        </strong>
        의 여행 리뷰
      </p>
      <p css={Styles.p}>
        <strong css={Styles.strong}>
          <NumberCounter endNumber={470} />만 개
        </strong>
        의 여행 일정
      </p>
    </div>
  )
}

export default AppStatisticsList
