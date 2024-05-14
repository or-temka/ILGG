import { ReactComponent as PlusSVG } from '../../../assets/svgs/plus.svg'
import Tooltip from '../../../components/UI/tooltips/Tooltip'
import SkeletonText from '../../../components/skeletons/SkeletonText'

import styles from './AccountBalance.module.scss'

function AccountBalance({
  balanceValue,
  currency = 'руб',
  onClickAccount = () => {},
  onClickToReplenish = () => {},
  className = '',
  ...params
}) {
  return (
    <div {...params} className={[styles.balance, className].join(' ')}>
      <Tooltip
        className={styles.addBtn}
        postitionVertical="bottom"
        text="Пополнить баланс"
        onClick={onClickToReplenish}
      >
        <PlusSVG />
      </Tooltip>
      <Tooltip
        className={styles.balance__account}
        onClick={onClickAccount}
        postitionVertical="bottom"
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
        {balanceValue ? (
          <>
            <span className={styles.balance__accountText}>{balanceValue}</span>
            <span className={styles.balance__accountText}>{currency}.</span>
          </>
        ) : (
          <SkeletonText type="light" />
        )}
      </Tooltip>
    </div>
  )
}

export default AccountBalance
