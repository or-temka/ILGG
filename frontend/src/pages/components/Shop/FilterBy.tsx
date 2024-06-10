import { AppType } from 'models/application/types/AppType'
import { MongoId } from 'models/mongoDB'

import { FilterFields, FilterValue } from '../../../redux/slices/shopAppsSlice'

import Checkbox from '../../../components/UI/inputs/Checkbox'

import styles from './FilterBy.module.scss'

interface FilterBy {
  headerText: string
  filterField: FilterFields
  appFiltersElements: AppType[]
  filters: FilterValue
  setFilterHandler: (field: FilterFields, newValue: FilterValue) => void
}

function FilterBy({
  headerText,
  filterField,
  appFiltersElements,
  filters,
  setFilterHandler,
}: FilterBy) {
  const onClickCheckboxHandler = (id: MongoId) => {
    const types = new Set<MongoId>(filters)

    if (filters?.has(id)) {
      types.delete(id)
    } else {
      types.add(id)
    }

    setFilterHandler(filterField, types)
  }

  return (
    <div className={styles.filter}>
      <div className={styles.filter__label}>{headerText}:</div>
      <nav className={styles.filter__filters}>
        {appFiltersElements.map((elem) => (
          <Checkbox
            key={elem._id}
            label={elem.name}
            checked={filters?.has(elem._id)}
            onChange={() => onClickCheckboxHandler(elem._id)}
          />
        ))}
      </nav>
    </div>
  )
}

export default FilterBy
