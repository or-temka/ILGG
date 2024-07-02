import Form from './Form/Form'

import styles from './PrivacySettings.module.scss'

function PrivacySettings() {
  return (
    <>
      <section className={styles.settings}>
        <div className={styles.settings__texts}>
          <h2 className={styles.settings__label}>
            Редактирование настроек приватности
          </h2>
          <span className={styles.settings__hint}>
            Укажите настройки приватности в отношении вас и вашего аккаунта.
          </span>
        </div>

        <Form />
      </section>
    </>
  )
}

export default PrivacySettings
