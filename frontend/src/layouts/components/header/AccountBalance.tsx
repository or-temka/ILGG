import { ReactComponent as PlusSVG } from '../../../assets/svgs/plus.svg'
import Tooltip, {
  VerticalDirection,
} from '../../../components/UI/tooltips/Tooltip'
import SkeletonText, {
  Variant,
} from '../../../components/skeletons/SkeletonText'

import styles from './AccountBalance.module.scss'

export enum Currency {
  rus = 'руб',
  us = 'usd',
}

interface AccountBalanceProps {
  loading?: boolean
  balanceValue?: number
  currency?: Currency
  onClickAccount?: (...args: any[]) => any
  onClickToReplenish?: (...args: any[]) => any
  className?: string
}

function AccountBalance({
  loading = false,
  balanceValue,
  currency = Currency.rus,
  onClickAccount = () => {},
  onClickToReplenish = () => {},
  className = '',
}: AccountBalanceProps) {
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
        {loading ? (
          <SkeletonText variant={Variant.light} />
        ) : (
          <>
            <span className={styles.balance__accountText}>{balanceValue}</span>
            <span className={styles.balance__accountText}>{currency}</span>
          </>
        )}
      </Tooltip>
    </div>
  )
}

export default AccountBalance
