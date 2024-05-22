import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { IShopApplication } from '../../interfaces/application'
import { error } from 'console'

//#region reducers interfaces

//#endregion

// запрос на программы для магазина
export const fetchShopApps = createAsyncThunk(
  'shopApps/fetchShopApps',
  async () => {
    const returnedData: IShopApplication[] = [
      {
        id: 1,
        name: 'Find number',
        aboutApp: 'Немного об этом приложении',

        developer: 'ILGG',
        imgSrc: 'find-number/poster.jpg',
        isNewApp: true,
        type: 'game',
        categories: [
          { id: 1, name: 'Категория 1' },
          { id: 2, name: 'Категория 2' },
        ],
        genres: [
          { id: 1, name: 'Жанр 1' },
          { id: 2, name: 'Жанр 2' },
        ],
      },
    ]
    return returnedData
  }
)

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
  reducers: {},
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

export const selectShopAppsState = (state: any): ShopAppsState => state.shopApps
export const selectShopApps = (state: any): IShopApplication[] | [] =>
  state.shopApps.data.filtered
export const selectUnfilteredShopApps = (state: any): IShopApplication[] | [] =>
  state.shopApps.data.init
export const selectShopAppsIsLoaded = (state: any): boolean =>
  state.shopApps.loading

export default shopAppsSlice.reducer
