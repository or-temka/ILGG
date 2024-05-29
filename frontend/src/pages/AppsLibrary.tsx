import Header from './components/AppsLibrary/Header'
import Main from './components/AppsLibrary/Main'

import styles from './AppsLibrary.module.scss'

interface AppsLibraryProps {
  classNames?: {
    wrapper?: string
  }
}

function AppsLibrary({ classNames }: AppsLibraryProps) {
  return (
    <>
      <div className={['wrapper', styles.page, classNames?.wrapper].join(' ')}>
        <Header />
        <Main />
      </div>
    </>
  )
}

export default AppsLibrary
