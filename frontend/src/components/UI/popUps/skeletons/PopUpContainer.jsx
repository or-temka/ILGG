import PopUpSkeleton from './PopUpSkeleton'

import styles from './PopUpContainer.module.scss'

function PopUpContainer({
  children,
  headerText = '',
  onClose = () => {},
  showCloseButton = true,
  showBack = true,
  className = '',
  ...params
}) {
  return (
    <PopUpSkeleton
      {...params}
      onClose={onClose}
      showCloseButton={showCloseButton}
      showBack={showBack}
    >
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
