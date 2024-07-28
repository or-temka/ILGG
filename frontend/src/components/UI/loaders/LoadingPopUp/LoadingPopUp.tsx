import { LoadingSpiner, PopUpContainer } from 'components'
import { LoadingPopUpProps } from './interfaces'
import styles from './LoadingPopUp.module.scss'

function LoadingPopUp({ classNames }: LoadingPopUpProps) {
  return (
    <PopUpContainer
      showCloseButton={false}
      classNames={{
        className: styles.loading,
        wrapperClassName: classNames?.containerClassName,
      }}
      showBack={false}
    >
      <LoadingSpiner className={classNames?.loadingSpinner} />
    </PopUpContainer>
  )
}

export { LoadingPopUp }
