import { useEffect } from 'react'

import Header from './Header/Header'
import Main from './Main/Main'
import { setPageName } from '../../../utils/setPageName'
import styles from './Marketplace.module.scss'

function Marketplace() {
  useEffect(() => {
    setPageName('Торговая площадка')
  }, [])

  return (
    <>
      <div className={['wrapper', styles.page].join(' ')}>
        <Header classNames={{ wrapper: styles.page__header }} />
        <Main classNames={{ wrapper: styles.page__main }} />
      </div>
    </>
  )
}

export default Marketplace
