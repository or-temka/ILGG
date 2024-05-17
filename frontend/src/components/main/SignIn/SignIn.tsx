import { useState } from 'react'

import Input, { InputVariant } from '../../UI/inputs/Input'
import PopUpSkeleton from '../../UI/popUps/skeletons/PopUpSkeleton'
import InputWithBtnIcon, {
  InputWithBtnIconVariant,
} from '../../UI/inputs/InputWithBtnIcon'
import { ReactComponent as ShowPasswordSVG } from '../../../assets/svgs/eye.svg'

import styles from './SignIn.module.scss'
import Button, { ButtonVariant } from '../../UI/buttons/Button'
import TextLink from '../../UI/links/TextLink'

function SignIn({ onClose = () => {} }) {
  const [userLogin, setUserLogin] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [passwordInputType, setPasswordInputType] = useState('password')

  const onClickBtnIcon = (input: ParentNode | null) => {
    if (!input) return
    const nowInputType = input.querySelector('input')?.type
    if (!nowInputType) return
    setPasswordInputType(nowInputType === 'password' ? 'text' : 'password')
  }

  return (
    <PopUpSkeleton
      classNames={{ contentClassName: styles.popUp }}
      onClose={onClose}
    >
      <div className={styles.popUp__poster}></div>
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
              input={{
                type: passwordInputType,
                name: 'password',
                autocomplete: 'current-password',
              }}
              variant={InputWithBtnIconVariant.light}
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              svgComponent={<ShowPasswordSVG />}
              onClickBtnIcon={onClickBtnIcon}
            />
          </div>
          <div className={styles.popUp__buttons}>
            <Button title="Войти" variant={ButtonVariant.primary} />
            <TextLink to="/">Забыли логин или пароль?</TextLink>
            <Button title="У меня нет аккаунта" variant={ButtonVariant.light} />
          </div>
        </div>
      </div>
    </PopUpSkeleton>
  )
}

export default SignIn
