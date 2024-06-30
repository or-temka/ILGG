import Form from './Form/Form'

import styles from './ProfileSettings.module.scss'

function ProfileSettings() {
  return (
    <>
      <section className={styles.settings}>
        <h2 className={styles.settings__label}>
          Редактирование информации профиля
        </h2>
        <span className={styles.settings__hint}>
          Укажите информацию, которую будут видеть другие пользователи при
          посещении вашего профиля.
        </span>

        <Form />
      </section>
    </>
  )
}

export default ProfileSettings
