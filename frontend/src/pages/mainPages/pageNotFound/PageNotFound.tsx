import { useEffect } from 'react'

import { ReactComponent as EmojiSadSVG } from 'assets/svgs/emoji/sad.svg'

import { setPageName } from 'utils/setPageName'

import styles from './PageNotFound.module.scss'

function PageNotFound() {
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
