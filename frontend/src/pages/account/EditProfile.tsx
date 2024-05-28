import { useEffect } from 'react'

import EditForm from './components/EditProfile/EditForm'

import { setPageName } from '../../utils/setPageName'

import styles from './EditProfile.module.scss'

function EditProfile() {
  useEffect(() => {
    setPageName('Редактирование профиля')
  }, [])

  return (
    <div className={['wrapper', styles.page].join(' ')}>
      <header className={styles.page__header}>
        <h2 className={styles.page__title}>Редактирование профиля</h2>
      </header>
      <section className={styles.page__section}>
        <EditForm />
      </section>
    </div>
  )
}

export default EditProfile
