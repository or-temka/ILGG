import { MongoId } from 'models/mongoDB'
import Checkbox from 'components/UI/inputs/Checkbox/Checkbox'
import styles from './FilterBy.module.scss'
import { FilterByProps } from './interfaces'

function FilterBy({
  headerText,
  filterField,
  appFiltersElements,
  filters,
  setFilterHandler,
}: FilterByProps) {
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
