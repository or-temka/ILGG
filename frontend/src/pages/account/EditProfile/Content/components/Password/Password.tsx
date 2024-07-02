import Form from './Form/Form'

import styles from './Password.module.scss'

function Password() {
  return (
    <>
      <section className={styles.password}>
        <div className={styles.password__texts}>
          <h2 className={styles.password__label}>Смена пароля</h2>
          <span className={styles.password__hint}>
            Старайтесь время от времени изменять свой пароль - это обезопасит
            вас от взлома.
          </span>
        </div>

        <Form />
      </section>
    </>
  )
}

export default Password
