import { createSlice } from '@reduxjs/toolkit'

import { IMyProfile, IUserBalance } from '../../interfaces/myProfile'

//#region reduces interfaces
interface SetUserAction {
  type: string
  payload: IMyProfile | null
}
//#endregion

export type ProfileState = IMyProfile | null

const initialState: ProfileState = null

const myProfileSlice = createSlice({
  name: 'myProfile',
  initialState,
  reducers: {
    setUser: (state: ProfileState, action: SetUserAction): any => ({
      ...action.payload,
    }),
  },
})

export const { setUser } = myProfileSlice.actions

export const selectUser = (state: any): IMyProfile | null => state.myProfile
export const selectBalance = (state: any): IUserBalance | null =>
  state.myProfile ? state.myProfile.balance : null

export default myProfileSlice.reducer
