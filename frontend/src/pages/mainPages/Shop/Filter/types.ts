import { FilterFields, FilterValue } from 'redux/slices/shopApps/interfaces'

export type Filters = {
  [key in FilterFields]: FilterValue
}
