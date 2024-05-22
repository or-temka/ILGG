import { AppType } from '../../../interfaces/application'
import { MongoId } from '../../../interfaces/main'

import { FilterFields, FilterValue } from '../../../redux/slices/shopAppsSlice'

import Checkbox from '../../../components/UI/inputs/Checkbox'

import styles from './FilterBy.module.scss'


interface FilterByAppTypeProps {
  appTypes: AppType[]
  filters: FilterValue
  setFilterHandler: (field: FilterFields, newValue: FilterValue) => void
}

function FilterByAppType({
  appTypes,
  filters,
  setFilterHandler,
}: FilterByAppTypeProps) {
  const onClickCheckboxHandler = (id: MongoId) => {
    const types = new Set<MongoId>(filters)

    if (filters?.has(id)) {
      types.delete(id)
    } else {
      types.add(id)
    }

    setFilterHandler('types', types)
  }

  return (
    <div className={styles.filter}>
      <div className={styles.filter__label}>Тип:</div>
      <nav className={styles.filter__filters}>
        {appTypes.map((type) => (
          <Checkbox
            key={type._id}
            label={type.name}
            checked={filters?.has(type._id)}
            onChange={() => onClickCheckboxHandler(type._id)}
          />
        ))}
      </nav>
    </div>
  )
}

export default FilterByAppType
