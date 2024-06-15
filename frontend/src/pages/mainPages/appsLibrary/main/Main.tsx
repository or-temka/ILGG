import { ViewAppsType } from '../AppsLibrary'
import BigPicturesMain from './bigPicturesMain/BigPicturesMain'
import ListAppsMain from './listAppsMain/ListAppsMain'

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
