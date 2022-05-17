import * as Styles from './styles'

import NumberCounter from 'components/NumberCounter'
import data from 'data/statistics'
import useReduceMotion from 'hooks/useReduceMotion'

function AppStatisticsList() {
  const reduceMotion = useReduceMotion()

  return (
    <div css={Styles.appStatisticsList}>
      {data.map((item) => (
        <p css={Styles.p} key={item.id}>
          <strong css={Styles.strong}>
            {reduceMotion ? (
              <span>{item.amountNumber}</span>
            ) : (
              <NumberCounter endNumber={item.amountNumber} />
            )}
            {item.amountUnit} {item.unit}
          </strong>
          의 {item.subject}
        </p>
      ))}
    </div>
  )
}

export default AppStatisticsList
