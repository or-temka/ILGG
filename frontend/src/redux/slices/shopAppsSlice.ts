import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { MongoId } from 'models/mongoDB'
import { IShopApplication } from 'models/application/IShopApplication'

import sortObjectsArrayBy from '../../utils/sortObjectsArrayBy'
import transformStringToDate from '../../utils/transformStringToDate'

//#region reducers interfaces
interface FilterShopAppsByAction {
  type: string
  payload: {
    filtersSet: MongoId[] | null
    filterFieldName: FilterFields
  }
}
interface SortShopAppsByAction {
  type: string
  payload: {
    sortValue: SortValue
    sortFieldName: SorterFields
  }
}
//#endregion

// запрос на программы для магазина
export const fetchShopApps = createAsyncThunk(
  'shopApps/fetchShopApps',
  async () => {
    const returnedData: IShopApplication[] = [
      {
        _id: 1,
        name: 'Find number',
        aboutApp: 'Немного об этом приложении',
        developer: 'ILGG',
        imgSrc: 'find-number/poster.jpg',
        isNewApp: true,
        types: [2],
        categories: [1, 2],
        playerTypes: [1],
        themes: [1],
        rating: 5,
        releaseDate: '10-12-2002',
        statistics: { views: { month: 100, week: 20, day: 4 } },
      },
      {
        _id: 2,
        name: 'Игра номер 2',
        aboutApp: 'Капельку о второй игре',
        developer: 'ILGG',
        imgSrc: 'find-number/poster.jpg',
        isNewApp: false,
        types: [1],
        categories: [2, 3],
        playerTypes: [1],
        themes: [1],
        price: 0,
        rating: 3,
        releaseDate: '2-11-2002',
        statistics: { views: { month: 1, week: 20, day: 4 } },
      },
      {
        _id: 3,
        name: 'three game',
        aboutApp: 'Немного об этом приложении',
        developer: 'ILGG',
        imgSrc: 'find-number/poster.jpg',
        isNewApp: true,
        types: [1],
        categories: [1, 4],
        playerTypes: [1],
        themes: [1],
        price: 100,
        releaseDate: '5-01-2003',
        statistics: { views: { month: 1000, week: 20, day: 4 } },
      },
      {
        _id: 4,
        name: 'третья gamesk',
        aboutApp: 'Немного об этом приложении',
        developer: 'ILGG',
        imgSrc: 'find-number/poster.jpg',
        isNewApp: false,
        types: [2],
        categories: [5],
        playerTypes: [1],
        themes: [1],
        price: 200,
        rating: 1,
        releaseDate: '3-08-1999',
        statistics: { views: { month: 300, week: 20, day: 4 } },
      },
    ]
    return returnedData
  }
)

export type FilterFields = 'categories' | 'playerTypes' | 'themes' | 'types'
export type SorterFields = 'price' | 'rating' | 'releaseDate' | 'popularity'
export type SortValue = boolean | null
export type FilterValue = Set<MongoId> | null

const fieldForSortInArray: { [key in SorterFields]: string } = {
  price: 'price',
  rating: 'rating',
  releaseDate: 'releaseDate',
  popularity: 'statistics.views.month',
}

type ShopAppsStateData = {
  init: IShopApplication[] | []
  filtered: IShopApplication[] | []
}

export type ShopAppsState = {
  data: ShopAppsStateData
  loading: boolean
  error: string | null | undefined
}

const initialState: ShopAppsState = {
  data: {
    init: [],
    filtered: [],
  },
  loading: true,
  error: null,
}

const shopAppsSlice = createSlice({
  name: 'shopApps',
  initialState,
  reducers: {
    filterShopAppsBy: (
      state: ShopAppsState,
      action: FilterShopAppsByAction
    ): void => {
      const fieldNameForFilter = action.payload.filterFieldName
      const filtersArray = action.payload.filtersSet

      const initialApps = [...state.data.init]

      if (filtersArray === null || filtersArray.length === 0) {
        state.data.filtered = initialApps
      } else {
        const filteredApps = initialApps.filter((app) =>
          app[fieldNameForFilter].some((value) => filtersArray?.includes(value))
        )

        state.data.filtered = filteredApps
      }
    },

    sortShopAppsBy: (
      state: ShopAppsState,
      action: SortShopAppsByAction
    ): void => {
      const fieldNameForSort = action.payload.sortFieldName
      const sortValue = action.payload.sortValue

      const isDate = ['releaseDate'].includes(fieldNameForSort)

      const initialApps = [...state.data.filtered]

      const sortedApps = sortObjectsArrayBy(
        initialApps,
        fieldForSortInArray[fieldNameForSort],
        sortValue,
        isDate ? transformStringToDate : undefined
      )

      state.data.filtered = sortedApps
    },

    resetFiltersShopApps: (state: ShopAppsState): void => {
      state.data.filtered = state.data.init
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchShopApps.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchShopApps.fulfilled, (state, action) => {
        state.loading = false
        state.data.init = action.payload
        state.data.filtered = action.payload
      })
      .addCase(fetchShopApps.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export const { filterShopAppsBy, sortShopAppsBy, resetFiltersShopApps } =
  shopAppsSlice.actions

export const selectShopAppsState = (state: any): ShopAppsState => state.shopApps
export const selectShopApps = (state: any): IShopApplication[] | [] =>
  state.shopApps.data.filtered
export const selectUnfilteredShopApps = (state: any): IShopApplication[] | [] =>
  state.shopApps.data.init
export const selectShopAppsIsLoaded = (state: any): boolean =>
  state.shopApps.loading

export default shopAppsSlice.reducer
