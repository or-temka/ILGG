import { application, mongoDB } from 'models'

export type FilterFields = 'categories' | 'playerTypes' | 'themes' | 'types'
export type SorterFields = 'price' | 'rating' | 'releaseDate' | 'popularity'
export type SortValue = boolean | null
export type FilterValue = Set<mongoDB.id> | null

type ShopAppsStateData = {
  init: application.IShopApplication[] | []
  filtered: application.IShopApplication[] | []
}

type ShopAppsState = {
  data: ShopAppsStateData
  loading: boolean
  error: string | null | undefined
}

export default ShopAppsState

//#region reducers interfaces
export interface FilterShopAppsByAction {
  type: string
  payload: {
    filtersSet: mongoDB.id[] | null
    filterFieldName: FilterFields
  }
}
export interface SortShopAppsByAction {
  type: string
  payload: {
    sortValue: SortValue
    sortFieldName: SorterFields
  }
}
//#endregion
