import { createSlice } from '@reduxjs/toolkit'

import { IMyProfile } from '../../components/interfaces/myProfile'

//#region reduces interfaces
interface SetUserAction {
  type: string
  payload: IMyProfile
}
//#endregion

const initialState: IMyProfile | {} = {}

const myProfileSlice = createSlice({
  name: 'myProfile',
  initialState,
  reducers: {
    setUser: (state, action: SetUserAction) => ({
      ...action.payload,
    }),
  },
})

export const { setUser } = myProfileSlice.actions

export const selectUser = (state: any) => state.myProfile

export default myProfileSlice.reducer
