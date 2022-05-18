import * as Styles from './styles'

import AppPrizeList from 'components/AppPrizeList'
import AppStatisticsList from 'components/AppStatisticsList'
import Layout from 'components/Layout'
import { visuallyHiddenStyle } from 'styles/common'

function App() {
  return (
    <Layout>
      <main css={Styles.mainContainer}>
        <h1 css={visuallyHiddenStyle}>트리플 앱 사용 지표와 수상 내역</h1>
        <section css={Styles.sectionContainer}>
          <p css={Styles.appInfo}>
            <span css={Styles.appInfoText}>2021년 12월 기준</span>
          </p>
          <div>
            <AppStatisticsList />
            <AppPrizeList />
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default App
