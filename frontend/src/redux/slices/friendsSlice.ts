import { createSlice } from '@reduxjs/toolkit'

import { IUserProfile } from '../../interfaces/userProfile'

//#region reduces interfaces
interface SetFriendsAction {
  type: string
  payload: IUserProfile[]
}
//#endregion

const initialState: IUserProfile[] = []

const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {
    setFriends: (state, action: SetFriendsAction) => [...action.payload],
  },
})

export const { setFriends } = friendsSlice.actions

export const selectFriends = (state: any) => state.friends

export default friendsSlice.reducer
