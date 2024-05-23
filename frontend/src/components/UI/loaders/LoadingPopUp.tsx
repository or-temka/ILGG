import PopUpContainer from '../popUps/skeletons/PopUpContainer'

import styles from './LoadingPopUp.module.scss'
import LoadingSpiner from './LoadingSpiner'

interface LoadingPopUpProps {
  classNames?: {
    containerClassName?: string
    loadingSpinner?: string
  }
}

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

export default LoadingPopUp
