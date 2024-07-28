import { Button, buttonVariant } from 'components'
import { AsideProps } from './interfaces'
import styles from './Aside.module.scss'

function Aside({ setContentType, activeContentType }: AsideProps) {
  return (
    <>
      <aside className={styles.aside}>
        <Button
          title="Профиль"
          variant={buttonVariant.menu}
          active={activeContentType === 'profile'}
          onClick={() => setContentType('profile')}
        />
        <Button
          title="Основная информация"
          variant={buttonVariant.menu}
          active={activeContentType === 'main'}
          onClick={() => setContentType('main')}
        />
        <Button
          title="Пароль"
          variant={buttonVariant.menu}
          active={activeContentType === 'password'}
          onClick={() => setContentType('password')}
        />
        <Button
          title="Аватар"
          variant={buttonVariant.menu}
          active={activeContentType === 'avatar'}
          onClick={() => setContentType('avatar')}
        />
        <Button
          title="Приватность"
          variant={buttonVariant.menu}
          active={activeContentType === 'privacy'}
          onClick={() => setContentType('privacy')}
        />
      </aside>
    </>
  )
}

export default Aside
