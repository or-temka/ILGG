import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import queryString from 'query-string'

import Aside from './Aside/Aside'
import Content from './Content/Content'
import styles from './EditProfile.module.scss'
import ContentType, { isContentType } from './interfaces'

function EditProfile() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [activeContent, setActiveContent] = useState<ContentType>('profile')

  useEffect(() => {
    const params = queryString.parse(searchParams.toString())
    if (isContentType(params.tab)) {
      setActiveContent(params.tab)
    }
  }, [setActiveContent, searchParams])

  const setActiveContentTab = (tab: ContentType) => {
    setActiveContent(tab)
    setSearchParams({ tab })
  }

  return (
    <>
      <div className={['wrapper', styles.page].join(' ')}>
        <div className={styles.page__settingsContent}>
          <Content contentType={activeContent} />

          <Aside
            setContentType={setActiveContentTab}
            activeContentType={activeContent}
          />
        </div>
      </div>
    </>
  )
}

export default EditProfile
