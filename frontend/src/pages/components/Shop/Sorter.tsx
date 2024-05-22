import { useState } from 'react'

import ButtonWithIcon, {
  ButtonWithIconIconPosition,
} from '../../../components/UI/buttons/ButtonWithIcon'
import { ReactComponent as ArrowSVG } from '../../../assets/svgs/arrow.svg'

import styles from './Sorter.module.scss'

type SortedInitialStateType = {
  price: null | boolean
  rating: null | boolean
  releaseDate: null | boolean
  popularity: null | boolean
}

const sortedInitialState: SortedInitialStateType = {
  price: null,
  rating: null,
  releaseDate: null,
  popularity: null,
}

function Sorter() {
  const [sorted, setSorted] = useState(sortedInitialState)

  const hadleToggleSort = (
    sortField: 'price' | 'rating' | 'releaseDate' | 'popularity'
  ) => {
    setSorted((prev) => ({
      ...sortedInitialState,
      [sortField]: prev[sortField] ? false : true,
    }))
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
          onClick={() => hadleToggleSort('popularity')}
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
          onClick={() => hadleToggleSort('rating')}
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
          onClick={() => hadleToggleSort('releaseDate')}
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
