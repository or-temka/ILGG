import PopUpContainer from '../popUps/skeletons/PopUpContainer'

import { ReactComponent as LoadingSVG } from '../../../assets/svgs/loading.svg'

import styles from './LoadingPopUp.module.scss'

interface LoadingPopUpProps {
  containerClassName?: string
  className?: string
}

function LoadingPopUp({
  containerClassName = '',
  className = '',
}: LoadingPopUpProps) {
  return (
    <PopUpContainer
      showCloseButton={false}
      classNames={{
        className: styles.loading,
        wrapperClassName: containerClassName,
      }}
      showBack={false}
    >
      <div className={[styles.loading__loading, className].join(' ')}>
        <LoadingSVG />
      </div>
    </PopUpContainer>
  )
}

export default LoadingPopUp
