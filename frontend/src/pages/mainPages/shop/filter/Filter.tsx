import { useState } from 'react'
import { useDispatch } from 'react-redux'

import {
  FilterFields,
  FilterValue,
  filterShopAppsBy,
  resetFiltersShopApps,
} from '../../../../redux/slices/shopAppsSlice'
import FilterBy from './components/FilterBy'
import Button, { ButtonVariant } from 'components/UI/buttons/Button/Button'
import appTypes from 'data/tempData/appTypes'
import appCategories from 'data/tempData/appCategories'
import appPlayerTypes from 'data/tempData/appPlayerTypes'
import appThemes from 'data/tempData/appThemes'

import styles from './Filter.module.scss'

type Filters = {
  [key in FilterFields]: FilterValue
}

const filtersInitial: Filters = {
  categories: null,
  playerTypes: null,
  themes: null,
  types: null,
}

interface FilterProps {
  resetSortHandler: Function
  classNames?: {
    main?: string
  }
}

function Filter({ classNames, resetSortHandler }: FilterProps) {
  const dispatch = useDispatch()

  const [filters, setFilters] = useState(filtersInitial)

  const setNewFilterHandler = (field: FilterFields, newValue: FilterValue) => {
    setFilters((prev: Filters) => ({ ...prev, [field]: newValue }))
    resetSortHandler()

    dispatch(
      filterShopAppsBy({
        filtersSet: newValue ? Array.from(newValue) : null,
        filterFieldName: field,
      })
    )
  }

  const onClickResetFiltersHandler = () => {
    setFilters(filtersInitial)
    resetSortHandler()
    dispatch(resetFiltersShopApps(undefined))
  }

  return (
    <aside className={[styles.filter, classNames?.main].join(' ')}>
      <div className={styles.filter__resetFiltersBtnContainer}>
        <Button
          className={styles.filter__resetFiltersBtn}
          variant={ButtonVariant.light}
          title="Сбросить фильтры"
          onClick={onClickResetFiltersHandler}
        />
      </div>

      <FilterBy
        headerText="Тип"
        filterField={'types'}
        appFiltersElements={appTypes}
        filters={filters.types}
        setFilterHandler={setNewFilterHandler}
      />
      <FilterBy
        headerText="Категории"
        filterField={'categories'}
        appFiltersElements={appCategories}
        filters={filters.categories}
        setFilterHandler={setNewFilterHandler}
      />
      <FilterBy
        headerText="Число игроков"
        filterField={'playerTypes'}
        appFiltersElements={appPlayerTypes}
        filters={filters.playerTypes}
        setFilterHandler={setNewFilterHandler}
      />
      <FilterBy
        headerText="Темы"
        filterField={'themes'}
        appFiltersElements={appThemes}
        filters={filters.themes}
        setFilterHandler={setNewFilterHandler}
      />
    </aside>
  )
}

export default Filter
