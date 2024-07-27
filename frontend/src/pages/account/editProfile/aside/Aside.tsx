import Button, { ButtonVariant } from 'components/UI/buttons/Button/Button'
import contentType from '../interfaces'

import styles from './Aside.module.scss'

interface AsideProps {
  setContentType: Function
  activeContentType: contentType
}

function Aside({ setContentType, activeContentType }: AsideProps) {
  return (
    <>
      <aside className={styles.aside}>
        <Button
          title="Профиль"
          variant={ButtonVariant.menu}
          active={activeContentType === 'profile'}
          onClick={() => setContentType('profile')}
        />
        <Button
          title="Основная информация"
          variant={ButtonVariant.menu}
          active={activeContentType === 'main'}
          onClick={() => setContentType('main')}
        />
        <Button
          title="Пароль"
          variant={ButtonVariant.menu}
          active={activeContentType === 'password'}
          onClick={() => setContentType('password')}
        />
        <Button
          title="Аватар"
          variant={ButtonVariant.menu}
          active={activeContentType === 'avatar'}
          onClick={() => setContentType('avatar')}
        />
        <Button
          title="Приватность"
          variant={ButtonVariant.menu}
          active={activeContentType === 'privacy'}
          onClick={() => setContentType('privacy')}
        />
      </aside>
    </>
  )
}

export default Aside
