import { useSelector } from 'react-redux'

import { selectApps } from '../../../redux/slices/myAppsLibrarySlice'

import AppsList from './ListAppsMain/AppsList'
import AppWindow from './ListAppsMain/AppWindow'

import styles from './ListAppsMain.module.scss'

interface ListAppsMainProps {
  classNames?: {
    wrapper?: string
  }
}

function ListAppsMain({ classNames }: ListAppsMainProps) {
  const myApps = useSelector(selectApps)

  return (
    <div className={[styles.main, classNames?.wrapper].join(' ')}>
      <div>
        <AppsList apps={myApps} />
      </div>
      <div>
        <AppWindow />
      </div>
    </div>
  )
}

export default ListAppsMain
