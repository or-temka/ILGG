import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../../redux/store'

import { selectMainPageApplications } from '../../../redux/slices/mainPageApplications/slice'
import pageLink from '../../../pagesLinks'
import Input from '../../../components/UI/inputs/Input/Input'
import GameBigCard from '../../../components/cards/GameBigCard/GameBigCard'
import GameBigCardSkeleton from '../../../components/cards/GameBigCardSkeleton/GameBigCardSkeleton'
import { clearPageName } from '../../../utils/setPageName'
import styles from './Main.module.scss'
import fetchApplicationsSimpleInfo from '../../../redux/slices/mainPageApplications/thunks/fetchApplicationsSimpleInfo'

function Main() {
  const [searchValue, setSearchValue] = useState<string>('')

  const dispatch = useDispatch<AppDispatch>()

  // set games
  const mainApplications = useSelector(selectMainPageApplications)

  useMemo(() => {
    dispatch(fetchApplicationsSimpleInfo())
  }, [])

  useEffect(() => {
    clearPageName()
  }, [])

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
                </>
              ) : (
                mainApplications.data.map((appBigCard, index) => (
                  <GameBigCard
                    key={index}
                    name={appBigCard.name}
                    imgSrc={appBigCard.imgSrc}
                    aboutGame={appBigCard.aboutApp}
                    to={pageLink.game + appBigCard._id}
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
