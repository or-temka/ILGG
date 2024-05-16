import { createSlice } from '@reduxjs/toolkit'

import { IUserProfile } from '../../interfaces/userProfile'

//#region reduces interfaces
interface SetFriendsAction {
  type: string
  payload: IUserProfile[]
}
//#endregion

export type UserState = IUserProfile[] | null

const initialState: UserState = null

const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {
    setFriends: (state: UserState, action: SetFriendsAction): any => [
      ...action.payload,
    ],
  },
})

export const { setFriends } = friendsSlice.actions

export const selectFriends = (state: any): UserState => state.friends

export default friendsSlice.reducer
