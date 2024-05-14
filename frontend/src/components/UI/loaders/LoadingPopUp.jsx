import PopUpContainer from '../popUps/skeletons/PopUpContainer'

import { ReactComponent as LoadingSVG } from '../../../assets/svgs/loading.svg'

import styles from './LoadingPopUp.module.scss'

function LoadingPopUp({ containerClassName, className, ...params }) {
  return (
    <PopUpContainer
      showCloseButton={false}
      className={[styles.loading, containerClassName].join(' ')}
      showBack={false}
    >
      <div
        {...params}
        className={[styles.loading__loading, className].join(' ')}
      >
        <LoadingSVG />
      </div>
    </PopUpContainer>
  )
}

export default LoadingPopUp
