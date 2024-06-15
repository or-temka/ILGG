import { ViewAppsType } from '../AppsLibrary'
import BigPicturesMain from './BigPicturesMain/BigPicturesMain'
import ListAppsMain from './ListAppsMain/ListAppsMain'

import styles from './Main.module.scss'

interface MainProps {
  viewAppsType: ViewAppsType
  classNames?: {
    wrapper?: string
  }
}

function Main({ viewAppsType, classNames }: MainProps) {
  return (
    <main className={[styles.main, classNames?.wrapper].join(' ')}>
      {viewAppsType === 'bigPictures' ? <BigPicturesMain /> : <ListAppsMain />}
    </main>
  )
}

export default Main
