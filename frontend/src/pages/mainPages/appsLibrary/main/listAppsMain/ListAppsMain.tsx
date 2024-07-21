import { useState } from 'react'
import { useSelector } from 'react-redux'

import { selectApps } from '../../../../../redux/slices/myAppsLibrary/slice'

import AppsList from './AppsList/AppsList'
import AppWindow from './AppWindow/AppWindow'

import styles from './ListAppsMain.module.scss'

interface ListAppsMainProps {
  classNames?: {
    wrapper?: string
  }
}

function ListAppsMain({ classNames }: ListAppsMainProps) {
  const [activeApp, setActiveApp] = useState()

  const myApps = useSelector(selectApps)

  return (
    <div className={[styles.main, classNames?.wrapper].join(' ')}>
      <div className={styles.main__appsList}>
        <AppsList apps={myApps} />
      </div>
      <div className={styles.main__appWindow}>
        <AppWindow />
      </div>
    </div>
  )
}

export default ListAppsMain
