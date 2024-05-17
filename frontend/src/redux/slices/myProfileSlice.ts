import { createSlice } from '@reduxjs/toolkit'

import { IMyProfile, IUserBalance } from '../../interfaces/myProfile'
import { act } from 'react'

//#region reduces interfaces
interface SetUserAction {
  type: string
  payload: IMyProfile | null
}
//#endregion

export type ProfileState = {
  data: IMyProfile | null
  loading: boolean
  error: string | null
}

const initialState: ProfileState = {
  data: null,
  loading: true,
  error: null,
}

const myProfileSlice = createSlice({
  name: 'myProfile',
  initialState,
  reducers: {
    setUser: (state: ProfileState, action: SetUserAction): any => ({
      data: action.payload,
      loading: false,
      error: null,
    }),
  },
})

export const { setUser } = myProfileSlice.actions

export const selectUser = (state: any): ProfileState => state.myProfile
export const selectUserData = (state: any): ProfileState => state.myProfile.data
export const selectBalance = (state: any): IUserBalance | null | undefined =>
  state.myProfile.data
    ? state.myProfile.data.balance
    : state.myProfile.loading
    ? null
    : undefined

export default myProfileSlice.reducer
