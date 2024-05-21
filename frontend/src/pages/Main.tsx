import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  selectMainPageApplications,
  setMainPageApplications,
} from '../redux/slices/mainPageApplicationsSlice'

import Input from '../components/UI/inputs/Input'
import GameBigCard from '../components/cards/GameBigCard'
import GameBigCardSkeleton from '../components/cards/GameBigCardSkeleton'

import styles from './Main.module.scss'
import { ISimpleApplication } from '../interfaces/application'
import pageLink from '../pagesLinks'

const appBigCards: ISimpleApplication[] = [
  {
    id: 1,
    name: 'Find Number',
    imgSrc: 'find-number/poster.jpg',
    aboutApp:
      'Игра, в которой вам предстоит находить числа на экране на время. Соревнуйтесь с друзьями за лучший результат и развивайте свою внимательность.',
    isNewApp: true,
  },
]

function Main() {
  const [searchValue, setSearchValue] = useState<string>('')

  const dispatch = useDispatch()

  // set games
  const mainApplications = useSelector(selectMainPageApplications)

  if (mainApplications.loading) {
    dispatch(setMainPageApplications(appBigCards))
  }

  return (
    <>
      <div className={['wrapper', styles.main].join(' ')}>
        <section className={styles.section}>
          <div className={styles.section__header}>
            <h2 className={styles.section__headerText}>Популярное</h2>
            <Input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Введите название"
              classNames={{
                wrapper: styles.section__searchInputWrapper,
                input: styles.section__searchInput,
              }}
            />
          </div>
          <div className={styles.section__contentWrapper}>
            <div className={styles.section__contnet}>
              {mainApplications.loading ? (
                <>
                  <GameBigCardSkeleton />
                  <GameBigCardSkeleton />
                  <GameBigCardSkeleton />
                  <GameBigCardSkeleton />
                  <GameBigCardSkeleton />
                  <GameBigCardSkeleton />
                  <GameBigCardSkeleton />
                  <GameBigCardSkeleton />
                </>
              ) : (
                appBigCards.map((appBigCard, index) => (
                  <GameBigCard
                    key={index}
                    name={appBigCard.name}
                    imgSrc={appBigCard.imgSrc}
                    aboutGame={appBigCard.aboutApp}
                    to={pageLink.applicationPage + appBigCard.id}
                    newGame={appBigCard.isNewApp}
                  />
                ))
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Main
