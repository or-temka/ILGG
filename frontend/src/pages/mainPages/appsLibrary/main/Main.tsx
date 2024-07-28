import BigPicturesMain from './BigPicturesMain/BigPicturesMain'
import { MainProps } from './interfaces'
import ListAppsMain from './ListAppsMain/ListAppsMain'
import styles from './Main.module.scss'

function Main({ viewAppsType, classNames }: MainProps) {
  return (
    <main className={[styles.main, classNames?.wrapper].join(' ')}>
      {viewAppsType === 'bigPictures' ? <BigPicturesMain /> : <ListAppsMain />}
    </main>
  )
}

export default Main
