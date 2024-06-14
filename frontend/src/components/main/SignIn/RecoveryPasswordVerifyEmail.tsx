import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useCallback, useState } from 'react'

import useImagePreloader from 'hooks/useImagePreloader'

import PopUpContainer from 'components/UI/popUps/skeletons/PopUpContainer'
import LoadingPopUp from 'components/UI/loaders/LoadingPopUp'
import ImgEnvelope from '../../../assets/images/posters/email-envelope.png'
import Input from 'components/UI/inputs/Input'
import Button, { ButtonVariant } from 'components/UI/buttons/Button'
import AuthService from 'services/authService'
import {
  PanelVariant,
  addPanel,
} from '../../../redux/slices/floatingPanelsQueueSlice'
import { FloatingNotificationVariant } from 'components/UI/floatingPanels/FloatingNotification'

import styles from './RecoveryPasswordVerifyEmail.module.scss'
import pageLink from 'pagesLinks'
import RepeatButton from 'pages/account/signUp/components/verifyEmail/RepeatButton'

const preloadSrcList: string[] = [ImgEnvelope]

interface VerifyEmailProps {
  onClose: Function
  emailOrLogin: string
}

function RecoveryPasswordVerifyEmail({ onClose, emailOrLogin }: VerifyEmailProps) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { imagesPreloaded } = useImagePreloader(preloadSrcList)
  const [codeValue, setCodeValue] = useState('')
  const [disabledSendBtn, setDisabledSendBtn] = useState(false)

  const onClickRepeatSendEmailHandler = useCallback(async () => {
    await AuthService.repeatSendEmail(emailOrLogin)
      .then(() => {
        dispatch(
          addPanel({
            item: {
              type: PanelVariant.textNotification,
              variant: FloatingNotificationVariant.success,
              text: 'Сообщение успешно отправлено!',
            },
          })
        )
      })
      .catch((error) => {
        const data = error?.response?.data
        dispatch(
          addPanel({
            item: {
              type: PanelVariant.textNotification,
              variant: FloatingNotificationVariant.error,
              text: data?.errorMsg || 'Произошла ошибка!',
            },
          })
        )
      })
  }, [emailOrLogin, dispatch])

  const onClickSendCodeHandler = useCallback(async () => {
    setDisabledSendBtn(true)
    await AuthService.sendEmailActivationCode(emailOrLogin, codeValue)
      .then((res) => {
        const activationLink = res.data.activationLink
        navigate(
          `${pageLink.signUp}?activationLink=${activationLink}&email=${emailOrLogin}`
        )
      })
      .catch((error) => {
        const data = error?.response?.data
        dispatch(
          addPanel({
            item: {
              type: PanelVariant.textNotification,
              variant: FloatingNotificationVariant.error,
              text: data?.errorMsg || 'Произошла ошибка!',
            },
          })
        )
      })
      .finally(() => setDisabledSendBtn(false))
  }, [emailOrLogin, codeValue, dispatch, navigate])

  if (!imagesPreloaded) {
    return <LoadingPopUp />
  }

  return (
    <PopUpContainer
      classNames={{ wrapperClassName: styles.modal }}
      onClose={() => onClose()}
    >
      <div className={styles.modal__content}>
        <span className={styles.modal__label}>Подтвердите ваш Email</span>
        <span className={styles.modal__hint}>
          Вам на почту было отправлено письмо с подтверждением. Введите код с
          подтверждением в поле.
        </span>

        <div className={styles.modal__confirmField}>
          <div className={styles.modal__confirmCodeField}>
            <Input
              value={codeValue}
              onChange={(e) => setCodeValue(e.target.value)}
              placeholder="Код подтверждения"
              classNames={{ wrapper: styles.modal__inputWrapper }}
            />
            {!codeValue.length ? (
              <RepeatButton onClick={onClickRepeatSendEmailHandler} />
            ) : (
              <Button
                title="Подтвердить"
                variant={ButtonVariant.primary}
                className={styles.modal__confirmEmailCodeBtn}
                disabled={codeValue.length !== 6 || disabledSendBtn}
                onClick={onClickSendCodeHandler}
              />
            )}
          </div>

          <img
            src={require('assets/images/posters/email-envelope.png')}
            alt="email envelope"
            className={styles.modal__envelopeImg}
          />
        </div>
        <span className={styles.modal__hint_warning}>
          Завершите регистрацию в течении 20 минут.
        </span>
      </div>
    </PopUpContainer>
  )
}

export default RecoveryPasswordVerifyEmail