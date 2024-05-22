import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import {
  FilterFields,
  FilterValue,
  filterShopAppsBy,
} from '../../../redux/slices/shopAppsSlice'

import FilterByAppType from './FilterByAppType'

import appTypes from '../../../data/tempData/appTypes'

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

function Filter() {
  const dispatch = useDispatch()

  const [filters, setFilters] = useState(filtersInitial)

  const setNewFilterHandler = (field: FilterFields, newValue: FilterValue) => {
    setFilters((prev: Filters) => ({ ...prev, [field]: newValue }))

    dispatch(
      filterShopAppsBy({
        filtersSet: newValue ? Array.from(newValue) : null,
        sortFieldName: field,
      })
    )
  }

  return (
    <aside className={styles.filter}>
      <FilterByAppType
        appTypes={appTypes}
        filters={filters.types}
        setFilterHandler={setNewFilterHandler}
      />
    </aside>
  )
}

export default Filter
