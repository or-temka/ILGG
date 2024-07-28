import { createSlice } from '@reduxjs/toolkit'

import ProfileState from './interfaces'
import reducers from './reducers'
import extraReducers from './extraReducers'
import { myUser } from 'models'

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
): myUser.IMyUserBalance | null | undefined =>
  state.myProfile.data
    ? state.myProfile.data.balance
    : state.myProfile.loading
    ? null
    : undefined

export default myProfileSlice.reducer
