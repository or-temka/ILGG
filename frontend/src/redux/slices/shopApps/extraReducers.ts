import { ActionReducerMapBuilder } from '@reduxjs/toolkit'

import ShopAppsState from './interfaces'
import fetchShopApps from './thunks/fetchShopApps'

const extraReducers = (builder: ActionReducerMapBuilder<ShopAppsState>) => {
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
}

export default extraReducers
