import { ActionReducerMapBuilder } from '@reduxjs/toolkit'

import MainPageApplicationsState from './interfaces'
import fetchApplicationsSimpleInfo from './thunks/fetchApplicationsSimpleInfo'

const extraReducers = (
  builder: ActionReducerMapBuilder<MainPageApplicationsState>
) => {
  builder
    .addCase(fetchApplicationsSimpleInfo.pending, (state) => {
      state.loading = true
      state.error = null
    })
    .addCase(fetchApplicationsSimpleInfo.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
    })
    .addCase(fetchApplicationsSimpleInfo.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
}

export default extraReducers
