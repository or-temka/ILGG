import { application } from 'models'
import { FilterFields, FilterValue } from 'redux/slices/shopApps/interfaces'

export interface FilterByProps {
  headerText: string
  filterField: FilterFields
  appFiltersElements: application.AppType[]
  filters: FilterValue
  setFilterHandler: (field: FilterFields, newValue: FilterValue) => void
}
