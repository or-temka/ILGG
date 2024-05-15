import { ReactNode } from 'react'

import PopUpSkeleton from './PopUpSkeleton'

import styles from './PopUpContainer.module.scss'

interface PopUpContainerProps {
  children: ReactNode
  headerText?: string
  onClose?: (...args: any[]) => any
  showCloseButton?: boolean
  showBack?: boolean
  classNames?: {
    className?: string
    wrapperClassName?: string
    contentClassName?: string
    headerClassName?: string
  }
}

function PopUpContainer({
  children,
  headerText = '',
  onClose = () => {},
  showCloseButton = true,
  showBack = true,
  classNames = {},
}: PopUpContainerProps) {
  return (
    <PopUpSkeleton
      onClose={onClose}
      showCloseButton={showCloseButton}
      showBack={showBack}
      classNames={{ contentClassName: classNames.wrapperClassName }}
    >
      <div className={[styles.popUpContainer, classNames.className].join(' ')}>
        {headerText && (
          <header
            className={[
              styles.popUpContainer__header,
              classNames.headerClassName,
            ].join(' ')}
          >
            {headerText}
          </header>
        )}
        <main
          className={[
            styles.popUpContainer__main,
            classNames.contentClassName,
          ].join(' ')}
        >
          {children}
        </main>
      </div>
    </PopUpSkeleton>
  )
}

export default PopUpContainer
