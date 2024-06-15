import Aside from './aside/Aside'
import Content from './content/Content'

import styles from './EditProfile.module.scss'

function EditProfile() {
  return (
    <>
      <div className={['wrapper', styles.page].join(' ')}>
        <div>
          <Aside />
          <Content />
        </div>
      </div>
    </>
  )
}

export default EditProfile
