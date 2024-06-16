import { ReactComponent as LoadingSVG } from 'assets/svgs/loading.svg'

import styles from './LoadingSpiner.module.scss'

function LoadingSpiner({ className = '' }) {
  return (
    <div className={[styles.loading__loading, className].join(' ')}>
      <LoadingSVG />
    </div>
  )
}

export default LoadingSpiner
