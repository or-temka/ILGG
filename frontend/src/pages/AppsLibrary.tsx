import { useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'

import { IAppFromLibrary } from '../interfaces/application'

import Header from './components/AppsLibrary/Header'
import Main from './components/AppsLibrary/Main'

import { setPageName } from '../utils/setPageName'

import styles from './AppsLibrary.module.scss'
import { setLibraryApps } from '../redux/slices/myAppsLibrarySlice'

export type ViewAppsType = 'list' | 'bigPictures'

export const getMyAppsLibrary = async () => {
  const returnedData: IAppFromLibrary[] = [
    {
      _id: 1,
      name: 'Find number',
      aboutApp: 'Я о своем приложении говорю вам',
      isNewApp: false,
      imgSrc: 'find-number/poster.jpg',
    },
  ]
  return returnedData
}

interface AppsLibraryProps {
  classNames?: {
    wrapper?: string
  }
}

function AppsLibrary({ classNames }: AppsLibraryProps) {
  const dispatch = useDispatch()
  const [viewAppsType, setViewAppsType] = useState<ViewAppsType>('bigPictures')

  useEffect(() => {
    setPageName('Библиотека')

    getMyAppsLibrary().then((res) => {
      dispatch(setLibraryApps(res))
    })
  }, [])

  return (
    <>
      <div className={['wrapper', styles.page, classNames?.wrapper].join(' ')}>
        <Header
          viewAppsType={viewAppsType}
          onChangeViewAppTypes={(viewType) => setViewAppsType(viewType)}
        />
        <Main viewAppsType={viewAppsType} />
      </div>
    </>
  )
}

export default AppsLibrary
