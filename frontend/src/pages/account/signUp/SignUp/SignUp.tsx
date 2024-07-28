import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { setPageName } from 'utils/setPageName'
import registration from '../../../../redux/slices/myProfile/thunks/registration'
import AboutService from '../components/AboutService'
import { SignUpForm } from './interfaces'
import Validations from 'validations/validations'
import { useLocationQuery, useNotificationPanel } from 'hooks'
import {
  Button,
  buttonVariant,
  Checkbox,
  floatingNotificationVariant,
  Input,
  InputPassword,
  LoadingSpiner,
} from 'components'
import { AuthService } from 'services'
import styles from '../SignUp.module.scss'

function SignUp() {
  const queryParams = useLocationQuery()
  const queryEmail = queryParams.get('email')
  const queryActivationLink = queryParams.get('activationLink')
  const isQuery = queryActivationLink && queryEmail
  useEffect(() => {
    if (!isQuery) {
      navigate('/')
    } else {
      AuthService.isActivationEmailLink(queryEmail, queryActivationLink).catch(
        () => navigate('/')
      )
    }
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
  } = useForm<SignUpForm>({
    mode: 'onSubmit',
    defaultValues: {
      email: queryEmail || '',
      activationLink: queryActivationLink || '',
      login: '',
      name: '',
      password: '',
      confirmPassword: '',
      personalDataConsent: false,
    },
  })
  const [isSendBtnLoading, setIsSendBtnLoading] = useState(false)
  const dispatch = useDispatch()
  const addNotificationErrorPanel = useNotificationPanel({
    variant: floatingNotificationVariant.error,
  })
  const navigate = useNavigate()
  useEffect(() => {
    setPageName('Регистрация')
  }, [])

  const onSubmit = useCallback(
    async (data: SignUpForm) => {
      setIsSendBtnLoading(true)
      await dispatch<any>(registration(data)).then((res: any) => {
        const requestStatus: 'rejected' | 'fulfilled' = res.meta.requestStatus
        const errorPayload = res.payload
        if (requestStatus === 'rejected') {
          if (Array.isArray(errorPayload)) {
            errorPayload.forEach((errField) => {
              setError(errField.path, { message: errField.msg })
            })
          } else {
            addNotificationErrorPanel(
              errorPayload?.errorMsg || 'Произошла ошибка!'
            )
          }
        } else if (requestStatus === 'fulfilled') {
          navigate('/')
        }
      })
      setIsSendBtnLoading(false)
    },
    [
      setIsSendBtnLoading,
      dispatch,
      addNotificationErrorPanel,
      navigate,
      setError,
    ]
  )

  if (!isQuery) {
    return (
      <div className="centerContainer">
        <LoadingSpiner />
      </div>
    )
  }

  return (
    <>
      <div className={['wrapper', styles.signUp].join(' ')}>
        <div className={styles.signUp__headerLabel}>
          <h2 className={styles.signUp__labelText}>Регистрация</h2>
        </div>
        <div className={styles.signUp__content}>
          <div
            className={[styles.signUp__contentItem, styles.signUp__form].join(
              ' '
            )}
          >
            <div className={styles.signUp__formHint}>
              <span className={styles.signUp__formHintText}>
                Укажите ваши данные для регистрации нового аккаунта. Позже их
                можно будет изменить.
              </span>
            </div>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <Input
                register={register('login', Validations.UseForm.User.login)}
                label="Логин: *"
                placeholder="Введите ваш логин"
                errorText={errors.login?.message}
              />
              <Input
                register={register('name', Validations.UseForm.User.username)}
                label="Никнейм: *"
                placeholder="Введите ваш никнейм"
                errorText={errors.name?.message}
              />
              <InputPassword
                register={register(
                  'password',
                  Validations.UseForm.User.password
                )}
                label="Пароль: *"
                placeholder="Введите пароль"
                errorText={errors.password?.message}
              />
              <InputPassword
                register={register(
                  'confirmPassword',
                  Validations.UseForm.User.password
                )}
                label="Подтверждение пароля: *"
                placeholder="Введите пароль ещё раз"
                errorText={errors.confirmPassword?.message}
              />

              <Checkbox
                register={register('personalDataConsent', { required: true })}
                label="Даю согласие на обработку персональных данных"
                className={styles.form__checkbox}
              />
              <Button
                type="submit"
                title="Создать аккаунт"
                disabled={isSendBtnLoading || !watch('personalDataConsent')}
                variant={buttonVariant.primary}
                className={styles.form__createButton}
              />
            </form>
          </div>

          <AboutService classNames={{ wrapper: styles.signUp__contentItem }} />
        </div>
      </div>
    </>
  )
}

export default SignUp
