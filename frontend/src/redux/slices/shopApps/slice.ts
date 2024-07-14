import { createSlice } from '@reduxjs/toolkit'

import { IShopApplication } from 'models/application/IShopApplication'
import extraReducers from './extraReducers'
import reducers from './reducers'
import ShopAppsState from './interfaces'

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
  reducers,
  extraReducers,
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
