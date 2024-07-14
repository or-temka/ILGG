import { createSlice } from '@reduxjs/toolkit'

import { IMyUser } from 'models/myUser/IMyUser'
import { IMyUserBalance } from 'models/myUser/IMyUserBalance'
import login from './thunks/login'
import registration from './thunks/registration'
import logout from './thunks/logout'
import checkAuth from './thunks/checkAuth'

// #region reducers interfaces
interface SetMyUserAction {
  type: string
  payload: IMyUser | null
}
// #endregion

export type ProfileState = {
  data: IMyUser | null
  loading: boolean
  error: string | null | undefined
}

const initialState: ProfileState = {
  data: null,
  loading: false,
  error: null,
}

const myProfileSlice = createSlice({
  name: 'myProfile',
  initialState,
  reducers: {
    setMyUser: (state: ProfileState, action: SetMyUserAction): any => ({
      data: action.payload,
      loading: false,
      error: null,
    }),
  },
  extraReducers: (builder) => {
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
  },
})

export const { setMyUser } = myProfileSlice.actions

export const selectMyUser = (state: any): ProfileState => state.myProfile
export const selectMyUserData = (state: any): ProfileState =>
  state.myProfile.data
export const selectMyBalance = (
  state: any
): IMyUserBalance | null | undefined =>
  state.myProfile.data
    ? state.myProfile.data.balance
    : state.myProfile.loading
    ? null
    : undefined

export default myProfileSlice.reducer
