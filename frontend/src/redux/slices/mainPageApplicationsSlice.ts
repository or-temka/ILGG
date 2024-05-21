import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { ISimpleApplication } from '../../interfaces/application'

//#region reduces interfaces
interface SetUserAction {
  type: string
  payload: ISimpleApplication[] | null
}
//#endregion

// Запрос на получение приложений
export const fetchApplicationsSimpleInfo = createAsyncThunk(
  'mainPageApplications/fetchApplicationsSimpleInfo',
  async () => {
    return [
      {
        id: 1,
        name: 'Find Number',
        imgSrc: 'find-number/poster.jpg',
        aboutApp:
          'Игра, в которой вам предстоит находить числа на экране на время. Соревнуйтесь с друзьями за лучший результат и развивайте свою внимательность.',
        isNewApp: true,
      },
    ]
  }
)

export type mainPageApplicationsState = {
  data: ISimpleApplication[] | []
  loading: boolean
  error: string | null | undefined
}

const initialState: mainPageApplicationsState = {
  data: [],
  loading: true,
  error: null,
}

const mainPageApplicationsSlice = createSlice({
  name: 'mainPageApplications',
  initialState,
  reducers: {
    setMainPageApplications: (
      state: mainPageApplicationsState,
      action: SetUserAction
    ): any => ({
      data: action.payload,
      loading: false,
      error: null,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchApplicationsSimpleInfo.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchApplicationsSimpleInfo.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchApplicationsSimpleInfo.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export const { setMainPageApplications } = mainPageApplicationsSlice.actions

export const selectMainPageApplications = (
  state: any
): mainPageApplicationsState => state.mainPageApplications

export default mainPageApplicationsSlice.reducer
