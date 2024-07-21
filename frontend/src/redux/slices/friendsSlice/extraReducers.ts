import { ActionReducerMapBuilder } from '@reduxjs/toolkit'

import UserState from './interfaces'
import fetchFriends from './thunks/fetchFriends'

const extraReducers = (builder: ActionReducerMapBuilder<UserState>) => {
  builder
    .addCase(fetchFriends.pending, (state) => {
      state.loading = true
      state.error = null
    })
    .addCase(fetchFriends.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
    })
    .addCase(fetchFriends.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
}

export default extraReducers
