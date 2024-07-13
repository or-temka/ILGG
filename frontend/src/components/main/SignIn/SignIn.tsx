import { Suspense, lazy, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import useImagePreloader from 'hooks/useImagePreloader'
import useNotificationPanel from 'hooks/dispatch/useNotificationPanel'

import Input, { InputVariant } from 'components/UI/inputs/Input/Input'
import PopUpSkeleton from 'components/UI/popUps/skeletons/PopUpSkeleton/PopUpSkeleton'
import InputWithBtnIcon, {
  InputWithBtnIconVariant,
} from 'components/UI/inputs/InputWithBtnIcon/InputWithBtnIcon'
import Button, { ButtonVariant } from 'components/UI/buttons/Button/Button'
import pageLink from 'pagesLinks'
import { login } from '../../../redux/slices/myProfileSlice'
import { FloatingNotificationVariant } from 'components/UI/floatingPanels/FloatingNotification/FloatingNotification'
import LoadingPopUp from 'components/UI/loaders/LoadingPopUp/LoadingPopUp'

import { ReactComponent as ShowPasswordSVG } from 'assets/svgs/eye.svg'
import { ReactComponent as LogoSVG } from 'assets/svgs/logo.svg'
import PosterImage from 'assets/images/posters/poster1.jpg'
import styles from './SignIn.module.scss'

const preloadSrcList: string[] = [PosterImage]

const RecoveryPassword = lazy(
  () => import('./RecoveryPassword/RecoveryPassword')
)

function SignIn({ onClose = () => {} }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const addNotificationErrorPanel = useNotificationPanel({
    variant: FloatingNotificationVariant.error,
  })

  const [userLogin, setUserLogin] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [passwordInputType, setPasswordInputType] = useState('password')
  const [isDisabledLoginBtn, setIsDisabledLoginBtn] = useState(false)
  const [showRecoveryPassword, setShowRecoveryPassword] = useState(false)

  const { imagesPreloaded } = useImagePreloader(preloadSrcList)

  if (!imagesPreloaded) {
    return <LoadingPopUp />
  }

  const onClickBtnIcon = (input: ParentNode | null) => {
    if (!input) return
    const nowInputType = input.querySelector('input')?.type
    if (!nowInputType) return
    setPasswordInputType(nowInputType === 'password' ? 'text' : 'password')
  }

  const onClickLoginHandler = () => {
    setIsDisabledLoginBtn(true)

    const credentials = {
      login: userLogin,
      password: userPassword,
    }

    dispatch<any>(login(credentials)).then((res: any) => {
      const requestStatus: 'rejected' | 'fullfiled' = res.meta.requestStatus
      const errorPayload = res.payload

      if (requestStatus === 'rejected') {
        addNotificationErrorPanel(errorPayload?.errorMsg)
      } else {
        onClose()
        navigate('/')
      }

      setIsDisabledLoginBtn(false)
    })
  }

  return (
    <>
      <PopUpSkeleton
        classNames={{ contentClassName: styles.popUp }}
        onClose={onClose}
      >
        <div className={styles.poster}>
          <img
            src={require('assets/images/posters/poster1.jpg')}
            className={styles.poster__backgroundImg}
          />
          <LogoSVG className={styles.poster__logo} />
        </div>
        <div className={styles.popUp__content}>
          <div className={styles.popUp__label}>
            <h2 className={styles.popUp__labelText}>Вход в аккаунт</h2>
          </div>
          <div className={styles.popUp__form}>
            <div className={styles.popUp__inputs}>
              <Input
                label="Логин:"
                placeholder="Введите ваш логин"
                value={userLogin}
                variant={InputVariant.light}
                onChange={(e) => setUserLogin(e.target.value)}
              />
              <InputWithBtnIcon
                label="Пароль:"
                placeholder="Введите ваш пароль"
                type={passwordInputType}
                name="password"
                autoComplete="current-password"
                variant={InputWithBtnIconVariant.light}
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                svgComponent={<ShowPasswordSVG />}
                onClickBtnIcon={onClickBtnIcon}
              />
            </div>
            <div className={styles.popUp__buttons}>
              <Button
                title="Войти"
                variant={ButtonVariant.primary}
                disabled={isDisabledLoginBtn}
                onClick={onClickLoginHandler}
              />
              <span
                className={styles.popUp__recoveryPasswordLink}
                onClick={() => setShowRecoveryPassword(true)}
              >
                Забыли логин или пароль?
              </span>
              <Button
                title="У меня нет аккаунта"
                variant={ButtonVariant.light}
                onClick={() => {
                  navigate(pageLink.signUpEmail)
                  onClose()
                }}
              />
            </div>
          </div>
        </div>
      </PopUpSkeleton>

      {/* other pop-up`s */}
      {showRecoveryPassword && (
        <Suspense fallback={<LoadingPopUp />}>
          <RecoveryPassword
            onClose={() => setShowRecoveryPassword(false)}
            onCloseSignIn={onClose}
          />
        </Suspense>
      )}
    </>
  )
}

export default SignIn
