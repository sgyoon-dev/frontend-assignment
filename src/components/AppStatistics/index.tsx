import * as Styles from './styles'

function AppStatistics({
  number,
  unit,
  object,
}: {
  number: number
  unit: string
  object: string
}) {
  return (
    <p css={Styles.p}>
      <strong css={Styles.strong}>
        <span>{number}</span>만 {unit}
      </strong>
      의 {object}
    </p>
  )
}

export default AppStatistics
