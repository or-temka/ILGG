import { createSlice } from '@reduxjs/toolkit'

import { IMyUserBalance } from 'models/myUser/IMyUserBalance'
import ProfileState from './interfaces'
import reducers from './reducers'
import extraReducers from './extraReducers'

const initialState: ProfileState = {
  data: null,
  loading: false,
  error: null,
}

const myProfileSlice = createSlice({
  name: 'myProfile',
  initialState,
  reducers,
  extraReducers,
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
