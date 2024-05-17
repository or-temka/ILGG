import { useSelector } from 'react-redux'

import { selectBalance } from '../../../redux/slices/myProfileSlice'

import { ReactComponent as PlusSVG } from '../../../assets/svgs/plus.svg'
import Tooltip, {
  VerticalDirection,
} from '../../../components/UI/tooltips/Tooltip'
import SkeletonText, {
  Variant,
} from '../../../components/skeletons/SkeletonText'

import styles from './AccountBalance.module.scss'

interface AccountBalanceProps {
  onClickAccount?: (...args: any[]) => any
  onClickToReplenish?: (...args: any[]) => any
  className?: string
}

function AccountBalance({
  onClickAccount = () => {},
  onClickToReplenish = () => {},
  className = '',
}: AccountBalanceProps) {
  const userBalance = useSelector(selectBalance)

  if (userBalance === undefined) {
    return <div className={[styles.balance, className].join(' ')}></div>
  }

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
        {!userBalance ? (
          <SkeletonText variant={Variant.light} />
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
