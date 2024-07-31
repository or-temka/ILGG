import { PopUpSkeleton } from '../skeletons'
import { PopUpContainerProps } from './interfaces'
import styles from './PopUpContainer.module.scss'

function PopUpContainer({
  children,
  headerText = '',
  onClose = () => {},
  showCloseButton = true,
  showBack = true,
  horizontalPosition,
  verticalPosition,
  classNames = {},
  ...rest
}: PopUpContainerProps) {
  return (
    <PopUpSkeleton
      onClose={onClose}
      showCloseButton={showCloseButton}
      showBack={showBack}
      horizontalPosition={horizontalPosition}
      verticalPosition={verticalPosition}
      classNames={{ contentClassName: classNames.wrapperClassName }}
      {...rest}
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

export { PopUpContainer }
