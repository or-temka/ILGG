import { IShopApplication } from 'models/application/IShopApplication'
import { MongoId } from 'models/mongoDB'

export type FilterFields = 'categories' | 'playerTypes' | 'themes' | 'types'
export type SorterFields = 'price' | 'rating' | 'releaseDate' | 'popularity'
export type SortValue = boolean | null
export type FilterValue = Set<MongoId> | null

type ShopAppsStateData = {
  init: IShopApplication[] | []
  filtered: IShopApplication[] | []
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
    filtersSet: MongoId[] | null
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
