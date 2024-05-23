import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { IShopApplication } from '../../interfaces/application'
import { MongoId } from '../../interfaces/main'

//#region reducers interfaces
interface FilterShopAppsByAction {
  type: string
  payload: {
    filtersSet: MongoId[] | null
    sortFieldName: FilterFields
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
      },
    ]
    return returnedData
  }
)

export type FilterFields = 'categories' | 'playerTypes' | 'themes' | 'types'
export type FilterValue = Set<MongoId> | null

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
    ): any => {
      const fieldNameForFilter = action.payload.sortFieldName
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
    resetFiltersShopApps: (state: ShopAppsState, action: any): void => {
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

export const { filterShopAppsBy, resetFiltersShopApps } = shopAppsSlice.actions

export const selectShopAppsState = (state: any): ShopAppsState => state.shopApps
export const selectShopApps = (state: any): IShopApplication[] | [] =>
  state.shopApps.data.filtered
export const selectUnfilteredShopApps = (state: any): IShopApplication[] | [] =>
  state.shopApps.data.init
export const selectShopAppsIsLoaded = (state: any): boolean =>
  state.shopApps.loading

export default shopAppsSlice.reducer
