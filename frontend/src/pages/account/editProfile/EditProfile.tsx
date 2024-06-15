import Aside from './Aside/Aside'
import Content from './Content/Content'

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
