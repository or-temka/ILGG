import PopUpContainer from 'components/UI/popUps/skeletons/PopUpContainer/PopUpContainer'
import LoadingSpiner from '../LoadingSpiner/LoadingSpiner'
import styles from './LoadingPopUp.module.scss'
import { LoadingPopUpProps } from './interfaces'

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
