import { AppType } from 'models/application/types/AppType'
import { FilterFields, FilterValue } from 'redux/slices/shopApps/interfaces'

export interface FilterByProps {
  headerText: string
  filterField: FilterFields
  appFiltersElements: AppType[]
  filters: FilterValue
  setFilterHandler: (field: FilterFields, newValue: FilterValue) => void
}
