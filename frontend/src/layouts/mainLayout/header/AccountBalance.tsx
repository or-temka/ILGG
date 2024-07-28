import { useSelector } from 'react-redux'

import { selectMyBalance } from '../../../redux/slices/myProfile/slice'
import { ReactComponent as PlusSVG } from 'assets/svgs/plus.svg'
import { AccountBalanceProps } from './interfaces'
import {
  SkeletonText,
  skeletonTextVariant,
  Tooltip,
  tooltipVerticalDirection,
} from 'components'

import styles from './AccountBalance.module.scss'

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
        postitionVertical={tooltipVerticalDirection.bottom}
        text="Пополнить баланс"
        onClick={onClickToReplenish}
      >
        <PlusSVG />
      </Tooltip>
      <Tooltip
        className={styles.balance__account}
        onClick={onClickAccount}
        postitionVertical={tooltipVerticalDirection.bottom}
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
          <SkeletonText variant={skeletonTextVariant.light} />
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
