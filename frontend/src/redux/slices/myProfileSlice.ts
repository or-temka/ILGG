import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import {
  BalanceCurrency,
  IMyProfile,
  IUserBalance,
} from '../../interfaces/myProfile'

//#region reduces interfaces
interface SetUserAction {
  type: string
  payload: IMyProfile | null
}
//#endregion

// запрос на пользователя
export const fetchProfileInfo = createAsyncThunk(
  'myProfile/fetchProfileInfo',
  async () => {
    return {
      id: 1,
      name: 'Приора',
      login: 'sversys',
      isOnline: true,
      imgName: 'profileImage.jpg',
      balance: {
        currency: BalanceCurrency.rus,
        value: 33,
      },
    }
  }
)

export type ProfileState = {
  data: IMyProfile | null
  loading: boolean
  error: string | null | undefined
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileInfo.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchProfileInfo.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchProfileInfo.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
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
