import * as Styles from './styles'

import AppStatistics from 'components/AppStatistics'
import Layout from 'components/Layout'
import { visuallyHiddenStyle } from 'styles/common'

function App() {
  return (
    <Layout>
      <main css={Styles.main}>
        <h1 css={visuallyHiddenStyle}>트리플 앱 사용 현황과 수상 이력</h1>
        <section css={Styles.section}>
          <p css={Styles.appInfo}>
            <span css={Styles.appInfoText}>2021년 12월 기준</span>
          </p>
          <div>
            <div css={Styles.appStatisticsList}>
              <AppStatistics number={700} unit="명" object="여행자" />
              <AppStatistics number={100} unit="개" object="여행 리뷰" />
              <AppStatistics number={470} unit="개" object="여행 일정" />
            </div>
            <div css={Styles.appPrizeList}>
              <p css={Styles.appPrize}>
                <span css={Styles.googleIcon} />
                2018 구글 플레이스토어
                <br />
                올해의 앱 최우수상 수상
              </p>
              <p css={Styles.appPrize}>
                <span css={Styles.appleIcon} />
                2018 애플 앱스토어
                <br />
                오늘의 여행앱 선정
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default App
