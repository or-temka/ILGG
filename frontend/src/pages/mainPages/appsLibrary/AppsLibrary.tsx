import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { setLibraryApps } from '../../../redux/slices/myAppsLibrarySlice'
import { IAppFromLibrary } from 'models/application/IAppFromLibrary'
import Header from './header/Header'
import Main from './main/Main'
import { setPageName } from 'utils/setPageName'

import styles from './AppsLibrary.module.scss'

export type ViewAppsType = 'list' | 'bigPictures'

export const getMyAppsLibrary = async () => {
  const returnedData: IAppFromLibrary[] = [
    {
      _id: 1,
      name: 'Find number1',
      aboutApp: 'Я о своем приложении говорю вам',
      isNewApp: false,
      imgSrc: 'find-number/poster.jpg',
      types: [1],
    },
    {
      _id: 2,
      name: 'Find number2',
      aboutApp: 'Я о своем приложении говорю вам',
      isNewApp: false,
      imgSrc: 'find-number/poster.jpg',
      types: [2],
    },
    {
      _id: 3,
      name: 'Find number3',
      aboutApp: 'Я о своем приложении говорю вам',
      isNewApp: false,
      imgSrc: 'find-number/poster.jpg',
      types: [2],
    },
    {
      _id: 4,
      name: 'Find number4',
      aboutApp: 'Я о своем приложении говорю вам',
      isNewApp: false,
      imgSrc: 'find-number/poster.jpg',
      types: [1],
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
  const [viewAppsType, setViewAppsType] = useState<ViewAppsType>('list')

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
