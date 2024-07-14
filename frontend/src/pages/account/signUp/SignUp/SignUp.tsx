import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import useNotificationPanel from 'hooks/dispatch/useNotificationPanel'
import useLocationQuery from 'hooks/useLocationQuery'
import Input from 'components/UI/inputs/Input/Input'
import Checkbox from 'components/UI/inputs/Checkbox/Checkbox'
import Button, { ButtonVariant } from 'components/UI/buttons/Button/Button'
import InputWithBtnIcon from 'components/UI/inputs/InputWithBtnIcon/InputWithBtnIcon'
import { setPageName } from 'utils/setPageName'
import { FloatingNotificationVariant } from 'components/UI/floatingPanels/FloatingNotification/FloatingNotification'
import { registration } from '../../../../redux/slices/myProfileSlice'
import AboutService from '../components/AboutService'
import LoadingSpiner from 'components/UI/loaders/LoadingSpiner/LoadingSpiner'
import AuthService from 'services/authService'
import { ReactComponent as EyeSVG } from 'assets/svgs/eye.svg'
import styles from '../SignUp.module.scss'
import { SignUpForm } from './interfaces'
import Regex from 'utils/regex'

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
    variant: FloatingNotificationVariant.error,
  })
  const navigate = useNavigate()
  useEffect(() => {
    setPageName('Регистрация')
  }, [])

  const changePasswordVisible = useCallback((elem: ParentNode | null) => {
    const input = elem?.querySelector('input')
    if (!input) return
    input.type = input?.type === 'password' ? 'text' : 'password'
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
    [setIsSendBtnLoading, dispatch, addNotificationErrorPanel, navigate]
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
                register={register('login', {
                  required: true,
                  minLength: {
                    value: 1,
                    message: 'Минимальная длина логина 1 символ',
                  },
                  maxLength: {
                    value: 30,
                    message: 'Максимальная длина логина 30 символов',
                  },
                  pattern: {
                    value: Regex.user.login,
                    message:
                      'Логин должен содержать символы латинского алфавита и/или цифры',
                  },
                })}
                label="Логин: *"
                placeholder="Введите ваш логин"
                errorText={errors.login?.message}
              />
              <Input
                register={register('name', {
                  required: true,
                  minLength: {
                    value: 1,
                    message: 'Минимальная длина никнейма 1 символ',
                  },
                  maxLength: {
                    value: 30,
                    message: 'Максимальная длина никнейма 30 символов',
                  },
                  pattern: {
                    value: Regex.user.name,
                    message: 'Неверный формат никнейма',
                  },
                })}
                label="Никнейм: *"
                placeholder="Введите ваш никнейм"
                errorText={errors.name?.message}
              />
              <InputWithBtnIcon
                register={register('password', {
                  required: true,
                  minLength: {
                    value: 5,
                    message: 'Минимальная длина пароля 6 символов',
                  },
                  maxLength: {
                    value: 50,
                    message: 'Максимальная длина пароля 50 символов',
                  },
                })}
                label="Пароль: *"
                placeholder="Введите пароль"
                type="password"
                onClickBtnIcon={changePasswordVisible}
                svgComponent={<EyeSVG />}
                errorText={errors.password?.message}
              />
              <InputWithBtnIcon
                register={register('confirmPassword', {
                  required: true,
                  minLength: {
                    value: 5,
                    message: 'Минимальная длина пароля 6 символов',
                  },
                  maxLength: {
                    value: 50,
                    message: 'Максимальная длина пароля 50 символов',
                  },
                })}
                label="Подтверждение пароля: *"
                placeholder="Введите пароль ещё раз"
                type="password"
                onClickBtnIcon={changePasswordVisible}
                svgComponent={<EyeSVG />}
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
                variant={ButtonVariant.primary}
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
