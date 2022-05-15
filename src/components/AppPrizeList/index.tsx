import * as Styles from './styles'

function AppPrizeList() {
  return (
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
  )
}

export default AppPrizeList
