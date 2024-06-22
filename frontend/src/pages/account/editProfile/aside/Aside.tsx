import Button, { ButtonVariant } from 'components/UI/buttons/Button/Button'
import styles from './Aside.module.scss'

interface AsideProps {}

function Aside({}: AsideProps) {
  return (
    <>
      <aside className={styles.aside}>
        <Button title="Профиль" variant={ButtonVariant.menu} active />
        <Button title="Основная информация" variant={ButtonVariant.menu} />
        <Button title="Приватность" variant={ButtonVariant.menu} />
      </aside>
    </>
  )
}

export default Aside
