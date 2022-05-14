import * as Styles from './styles'

import Layout from 'components/Layout'
import { visuallyHiddenStyle } from 'styles/common'

// import googleAppStoreIcon from 'assets/images/play-store@2x.png'
// import appleIcon from 'assets/images/badge-apple@4x.png'

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
            <div>
              <p>
                <strong>
                  <span>700</span>만 명
                </strong>
                의 여행자
              </p>
              <p>
                <strong>
                  <span>100</span>만 개
                </strong>
                의 여행 리뷰
              </p>
              <p>
                <strong>
                  <span>470</span>만 개
                </strong>
                의 여행 일정
              </p>
            </div>
            <div>
              <p>
                {/* icon */}
                <span />
                2018 구글 플레이스토어
                <br />
                올해의 앱 최우수상 수상
              </p>
              <p>
                {/* icon */}
                <span />
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
