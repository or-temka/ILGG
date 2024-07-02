import Form from './Form/Form'

import styles from './MainInfoSettings.module.scss'

function MainInfoSettings() {
  return (
    <>
      <section className={styles.settings}>
        <div className={styles.settings__texts}>
          <h2 className={styles.settings__label}>
            Редактирование основной информации
          </h2>
          <span className={styles.settings__hint}>
            Старайтесь указать понятные данные о себе, чтобы другим
            пользователям было проще вас найти
          </span>
        </div>

        <Form />
      </section>
    </>
  )
}

export default MainInfoSettings
