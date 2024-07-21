import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { sortShopAppsBy } from '../../../../redux/slices/shopApps/slice'
import ButtonWithIcon, {
  ButtonWithIconIconPosition,
} from 'components/UI/buttons/ButtonWithIcon/ButtonWithIcon'
import { ReactComponent as ArrowSVG } from 'assets/svgs/arrow.svg'
import styles from './Sorter.module.scss'
import {
  SorterFields,
  SortValue,
} from '../../../../redux/slices/shopApps/interfaces'

type Sorted = { [key in SorterFields]: SortValue }

const sortedInitial: Sorted = {
  price: null,
  rating: null,
  releaseDate: null,
  popularity: null,
}

interface SorterProps {
  resetSort?: number
}

function Sorter({ resetSort }: SorterProps) {
  const dispatch = useDispatch()

  const [sorted, setSorted] = useState(sortedInitial)

  useEffect(() => {
    resetSortHandler()
  }, [resetSort])

  const hadleToggleSort = (
    sortField: SorterFields,
    reverse: boolean = false
  ) => {
    setSorted((prev) => {
      return {
        ...sortedInitial,
        [sortField]:
          prev[sortField] === null
            ? reverse
              ? false
              : true
            : !prev[sortField],
      }
    })

    dispatch(
      sortShopAppsBy({
        sortFieldName: sortField,
        sortValue:
          sorted[sortField] === null
            ? reverse
              ? false
              : true
            : !sorted[sortField],
      })
    )
  }

  const resetSortHandler = () => {
    setSorted(sortedInitial)
  }

  return (
    <nav className={styles.sorter}>
      <div className={styles.sorter__labelContainer}>
        <span className={styles.sorter__label}>Сортировка:</span>
      </div>
      <div className={styles.sorter__sorts}>
        <ButtonWithIcon
          title="По цене"
          iconPosition={ButtonWithIconIconPosition.right}
          onClick={() => hadleToggleSort('price')}
          className={sorted.price !== null ? styles.sorter__sortBtn_active : ''}
          iconSVG={
            sorted.price !== null ? (
              <ArrowSVG
                className={[
                  styles.sorter__sortBtnIcon,
                  sorted.price
                    ? styles.sorter__sortBtnIcon_up
                    : styles.sorter__sortBtnIcon_down,
                ].join(' ')}
              />
            ) : (
              ''
            )
          }
        />
        <ButtonWithIcon
          title="По популярности"
          iconPosition={ButtonWithIconIconPosition.right}
          onClick={() => hadleToggleSort('popularity', true)}
          className={
            sorted.popularity !== null ? styles.sorter__sortBtn_active : ''
          }
          iconSVG={
            sorted.popularity !== null ? (
              <ArrowSVG
                className={[
                  styles.sorter__sortBtnIcon,
                  sorted.popularity
                    ? styles.sorter__sortBtnIcon_up
                    : styles.sorter__sortBtnIcon_down,
                ].join(' ')}
              />
            ) : (
              ''
            )
          }
        />
        <ButtonWithIcon
          title="По рейтингу"
          iconPosition={ButtonWithIconIconPosition.right}
          onClick={() => hadleToggleSort('rating', true)}
          className={
            sorted.rating !== null ? styles.sorter__sortBtn_active : ''
          }
          iconSVG={
            sorted.rating !== null ? (
              <ArrowSVG
                className={[
                  styles.sorter__sortBtnIcon,
                  sorted.rating
                    ? styles.sorter__sortBtnIcon_up
                    : styles.sorter__sortBtnIcon_down,
                ].join(' ')}
              />
            ) : (
              ''
            )
          }
        />
        <ButtonWithIcon
          title="По дате выхода"
          iconPosition={ButtonWithIconIconPosition.right}
          onClick={() => hadleToggleSort('releaseDate', true)}
          className={
            sorted.releaseDate !== null ? styles.sorter__sortBtn_active : ''
          }
          iconSVG={
            sorted.releaseDate !== null ? (
              <ArrowSVG
                className={[
                  styles.sorter__sortBtnIcon,
                  sorted.releaseDate
                    ? styles.sorter__sortBtnIcon_up
                    : styles.sorter__sortBtnIcon_down,
                ].join(' ')}
              />
            ) : (
              ''
            )
          }
        />
      </div>
    </nav>
  )
}

export default Sorter
