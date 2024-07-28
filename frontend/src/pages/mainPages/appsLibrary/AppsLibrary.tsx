import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { setLibraryApps } from '../../../redux/slices/myAppsLibrary/slice'
import Header from './Header/Header'
import Main from './Main/Main'
import { setPageName } from 'utils/setPageName'
import styles from './AppsLibrary.module.scss'
import { AppsLibraryProps } from './interfaces'
import { ViewAppsType } from './types'
import { application } from 'models'

export const getMyAppsLibrary = async () => {
  const returnedData: application.IAppFromLibrary[] = [
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

function AppsLibrary({ classNames }: AppsLibraryProps) {
  const dispatch = useDispatch()
  const [viewAppsType, setViewAppsType] = useState<ViewAppsType>('list')

  useEffect(() => {
    setPageName('Библиотека')

    getMyAppsLibrary().then((res) => {
      dispatch(setLibraryApps(res))
    })
  }, [dispatch])

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
