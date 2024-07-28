import { SorterFields, SortValue } from 'redux/slices/shopApps/interfaces'

export type Sorted = { [key in SorterFields]: SortValue }
