import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { IUserProfile } from 'models/user/IUserProfile'

//#region reduces interfaces
interface SetFriendsAction {
  type: string
  payload: IUserProfile[]
}
//#endregion

// Запрос на друзей
export const fetchFriends = createAsyncThunk(
  'friends/fetchFriends',
  async () => {
    const returnedData: IUserProfile[] = [
      {
        _id: 1,
        name: 'Алина убивца',
        login: 'alina',
        isOnline: true,
        imgName: 'alina.jpg',
      },
      {
        _id: 2,
        name: 'Freevel',
        login: 'freevel',
        isOnline: true,
        imgName: 'serega.jpg',
      },
      {
        _id: 3,
        name: 'мухтар в снегу 3000',
        login: 'myhtar',
        isOnline: false,
        imgName: 'myhtar.jpg',
      },
    ]
    return returnedData
  }
)

export type UserState = {
  data: IUserProfile[] | []
  loading: boolean
  error: string | null | undefined
}

const initialState: UserState = {
  data: [],
  loading: true,
  error: null,
}

const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {
    setFriends: (state: UserState, action: SetFriendsAction): any => [
      ...action.payload,
    ],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFriends.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchFriends.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchFriends.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export const { setFriends } = friendsSlice.actions

export const selectFriends = (state: any): UserState => state.friends

export default friendsSlice.reducer
