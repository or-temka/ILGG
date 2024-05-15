import { useEffect } from 'react'
import { ReactComponent as EmojiSadSVG } from '../assets/svgs/emoji/sad.svg'

import styles from './PageNotFound.module.scss'

interface PageNotFoundProps {
  setPageName: (name: string) => void
}

function PageNotFound({ setPageName }: PageNotFoundProps) {
  useEffect(() => {
    setPageName('Страница не найдена')
  }, [])

  return (
    <div className={['wrapper', styles.page].join(' ')}>
      <div className={styles.page__content}>
        <div className={styles.page__icon}>
          <EmojiSadSVG />
        </div>
        <span className={styles.page__mainText}>Упс...</span>
        <span className={styles.page__text}>Страница не найдена</span>
      </div>
    </div>
  )
}

export default PageNotFound
