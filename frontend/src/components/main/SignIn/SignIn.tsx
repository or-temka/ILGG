import { Suspense, lazy, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import pageLink from 'pagesLinks'
import login from '../../../redux/slices/myProfile/thunks/login'
import { ReactComponent as LogoSVG } from 'assets/svgs/logo.svg'
import PosterImage from 'assets/images/posters/poster1.jpg'
import { useForm } from 'react-hook-form'
import { SignInForm } from './interfaces'
import Validations from 'validations/validations'
import { useImagePreloader, useNotificationPanel } from 'hooks'
import {
  Button,
  buttonVariant,
  floatingNotificationVariant,
  Input,
  InputPassword,
  inputVariant,
  LoadingPopUp,
  PopUpSkeleton,
} from 'components'
import styles from './SignIn.module.scss'

const preloadSrcList: string[] = [PosterImage]

const RecoveryPassword = lazy(
  () => import('./RecoveryPassword/RecoveryPassword')
)

function SignIn({ onClose = () => {} }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const addNotificationErrorPanel = useNotificationPanel({
    variant: floatingNotificationVariant.error,
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
            alt="ilgg постер"
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
                variant={inputVariant.light}
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
                variant={buttonVariant.primary}
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
                variant={buttonVariant.light}
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

export { SignIn }
