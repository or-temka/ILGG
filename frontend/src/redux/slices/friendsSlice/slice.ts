import { createSlice } from '@reduxjs/toolkit'

import UserState from './interfaces'
import extraReducers from './extraReducers'
import reducers from './reducers'

const initialState: UserState = {
  data: [],
  loading: true,
  error: null,
}

const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers,
  extraReducers,
})

export const { setFriends } = friendsSlice.actions

export const selectFriends = (state: any): UserState => state.friends

export default friendsSlice.reducer
