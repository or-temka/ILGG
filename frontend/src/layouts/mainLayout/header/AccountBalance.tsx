import { useSelector } from 'react-redux'

import { selectMyBalance } from '../../../redux/slices/myProfile/slice'
import { ReactComponent as PlusSVG } from 'assets/svgs/plus.svg'
import Tooltip, {
  VerticalDirection,
} from 'components/UI/tooltips/Tooltip/Tooltip'
import SkeletonText, {
  SkeletonTextVariant,
} from 'components/skeletons/SkeletonText/SkeletonText'
import styles from './AccountBalance.module.scss'
import { AccountBalanceProps } from './interfaces'

function AccountBalance({
  onClickAccount = () => {},
  onClickToReplenish = () => {},
  className = '',
}: AccountBalanceProps) {
  const userBalance = useSelector(selectMyBalance)

  if (userBalance === undefined) {
    return <div className={[styles.balance, className].join(' ')}></div>
  }

  console.log(userBalance)

  return (
    <div className={[styles.balance, className].join(' ')}>
      <Tooltip
        className={styles.addBtn}
        postitionVertical={VerticalDirection.bottom}
        text="Пополнить баланс"
        onClick={onClickToReplenish}
      >
        <PlusSVG />
      </Tooltip>
      <Tooltip
        className={styles.balance__account}
        onClick={onClickAccount}
        postitionVertical={VerticalDirection.bottom}
        text="Управление балансом"
      >
        {/* Вывод скелетона */}
        <span
          className={[
            styles.balance__accountText,
            styles.balance__accountTextLabel,
          ].join(' ')}
        >
          Баланс:
        </span>
        {userBalance === null ? (
          <SkeletonText variant={SkeletonTextVariant.light} />
        ) : (
          <>
            <span className={styles.balance__accountText}>
              {userBalance.value}
            </span>
            <span className={styles.balance__accountText}>
              {userBalance.currency}
            </span>
          </>
        )}
      </Tooltip>
    </div>
  )
}

export default AccountBalance
