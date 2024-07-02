import { useState } from 'react'

import Aside from './Aside/Aside'
import Content from './Content/Content'
import contentType from './contentType'

import styles from './EditProfile.module.scss'

function EditProfile() {
  const [activeContent, setActiveContent] = useState<contentType>('profile')

  return (
    <>
      <div className={['wrapper', styles.page].join(' ')}>
        <div className={styles.page__settingsContent}>
          <Content contentType={activeContent} />

          <Aside
            setContentType={setActiveContent}
            activeContentType={activeContent}
          />
        </div>
      </div>
    </>
  )
}

export default EditProfile
