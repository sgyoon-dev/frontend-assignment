import * as Styles from './styles'

import data from 'data/prizes'

function AppPrizeList() {
  return (
    <div css={Styles.appPrizeList}>
      {data.map((item) => (
        <p key={item.id} css={Styles.appPrize}>
          <img src={item.imageUrl} css={Styles.icon} alt="" />
          {item.text}
        </p>
      ))}
    </div>
  )
}

export default AppPrizeList
