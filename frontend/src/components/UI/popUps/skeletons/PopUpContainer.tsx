import { ReactNode } from 'react'

import PopUpSkeleton from './PopUpSkeleton'

import styles from './PopUpContainer.module.scss'

interface PopUpContainerProps {
  children: ReactNode
  headerText?: string
  onClose?: (...args: any[]) => any
  showCloseButton?: boolean
  showBack?: boolean
  className?: string
}

function PopUpContainer({
  children,
  headerText = '',
  onClose = () => {},
  showCloseButton = true,
  showBack = true,
  className = '',
}: PopUpContainerProps) {
  return (
    <PopUpSkeleton
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
