import Form from './Form/Form'
import styles from './Avatar.module.scss'

function Avatar() {
  return (
    <>
      <div className={styles.avatar}>
        <div className={styles.avatar__texts}>
          <h2 className={styles.avatar__label}>Редактирование аватара</h2>
          <span className={styles.avatar__hint}>
            Укажите файл для загрузки фото вашего профиля или выберети готовый
            вариант
          </span>
        </div>

        <Form />
      </div>
    </>
  )
}

export default Avatar
