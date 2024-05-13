import PopUpSkeleton from './PopUpSkeleton'

import styles from './PopUpContainer.module.scss'

function PopUpContainer({
  children,
  headerText = '',
  onClose = () => {},
  className = '',
  ...params
}) {
  return (
    <PopUpSkeleton {...params} onClose={onClose}>
      <div className={[styles.popUpContainer, className].join(' ')}>
        {headerText && (
          <header className={styles.popUpContainer__header}>
            {headerText}
          </header>
        )}
        <main className={styles.popUpContainer__main}>{children}</main>
      </div>
    </PopUpSkeleton>
  )
}

export default PopUpContainer
