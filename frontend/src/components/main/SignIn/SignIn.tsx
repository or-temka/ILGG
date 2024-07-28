import { Suspense, lazy, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Input, { InputVariant } from 'components/UI/inputs/Input/Input'
import PopUpSkeleton from 'components/UI/popUps/skeletons/PopUpSkeleton/PopUpSkeleton'
import Button, { ButtonVariant } from 'components/UI/buttons/Button/Button'
import pageLink from 'pagesLinks'
import login from '../../../redux/slices/myProfile/thunks/login'
import { FloatingNotificationVariant } from 'components/UI/floatingPanels/FloatingNotification/FloatingNotification'
import LoadingPopUp from 'components/UI/loaders/LoadingPopUp/LoadingPopUp'
import { ReactComponent as LogoSVG } from 'assets/svgs/logo.svg'
import PosterImage from 'assets/images/posters/poster1.jpg'
import styles from './SignIn.module.scss'
import InputPassword from 'components/UI/inputs/InputPassword/InputPassword'
import { useForm } from 'react-hook-form'
import { SignInForm } from './interfaces'
import Validations from 'validations/validations'
import { useImagePreloader, useNotificationPanel } from 'hooks'

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>()

  const [isDisabledLoginBtn, setIsDisabledLoginBtn] = useState(false)
  const [showRecoveryPassword, setShowRecoveryPassword] = useState(false)

  const { imagesPreloaded } = useImagePreloader(preloadSrcList)
  if (!imagesPreloaded) {
    return <LoadingPopUp />
  }

  const onSubmit = (data: SignInForm) => {
    setIsDisabledLoginBtn(true)
    dispatch<any>(login(data)).then((res: any) => {
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
          <form
            className={styles.popUp__form}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={styles.popUp__inputs}>
              <Input
                register={register('login', Validations.UseForm.User.login)}
                label="Логин:"
                placeholder="Введите ваш логин"
                variant={InputVariant.light}
                errorText={errors.login?.message}
              />
              <InputPassword
                register={register(
                  'password',
                  Validations.UseForm.User.password
                )}
                label="Пароль:"
                placeholder="Введите ваш пароль"
                name="password"
                autoComplete="current-password"
                errorText={errors.password?.message}
              />
            </div>
            <div className={styles.popUp__buttons}>
              <Button
                title="Войти"
                type="submit"
                variant={ButtonVariant.primary}
                disabled={isDisabledLoginBtn}
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
                type="button"
                onClick={() => {
                  navigate(pageLink.signUpEmail)
                  onClose()
                }}
              />
            </div>
          </form>
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
