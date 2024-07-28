import PopUpSkeleton from '../PopUpSkeleton/PopUpSkeleton'
import styles from './PopUpContainer.module.scss'
import { PopUpContainerProps } from './interfaces'

function PopUpContainer({
  children,
  headerText = '',
  onClose = () => {},
  showCloseButton = true,
  showBack = true,
  horizontalPosition,
  verticalPosition,
  classNames = {},
}: PopUpContainerProps) {
  return (
    <PopUpSkeleton
      onClose={onClose}
      showCloseButton={showCloseButton}
      showBack={showBack}
      horizontalPosition={horizontalPosition}
      verticalPosition={verticalPosition}
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
