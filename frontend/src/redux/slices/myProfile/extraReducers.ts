import { ActionReducerMapBuilder } from '@reduxjs/toolkit'

import ProfileState from './interfaces'
import login from './thunks/login'
import registration from './thunks/registration'
import logout from './thunks/logout'
import checkAuth from './thunks/checkAuth'

const extraReducers = (builder: ActionReducerMapBuilder<ProfileState>) => {
  builder
    // login
    .addCase(login.pending, (state) => {
      state.loading = false
      state.error = null
    })
    .addCase(login.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
    })
    .addCase(login.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })

    // registration
    .addCase(registration.pending, (state) => {
      state.loading = false
      state.error = null
    })
    .addCase(registration.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
    })
    .addCase(registration.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })

    // logout
    .addCase(logout.pending, (state) => {
      state.loading = true
      state.error = null
    })
    .addCase(logout.fulfilled, (state, action) => {
      state.loading = false
      state.data = null
    })
    .addCase(logout.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })

    // checkAuth
    .addCase(checkAuth.pending, (state) => {
      state.loading = true
      state.error = null
    })
    .addCase(checkAuth.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
    })
    .addCase(checkAuth.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
}

export default extraReducers
