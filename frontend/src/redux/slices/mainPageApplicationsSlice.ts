import { createSlice } from '@reduxjs/toolkit'

import { ISimpleApplication } from '../../interfaces/application'

//#region reduces interfaces
interface SetUserAction {
  type: string
  payload: ISimpleApplication[] | null
}
//#endregion

export type mainPageApplicationsState = {
  data: ISimpleApplication[] | null
  loading: boolean
  error: string | null
}

const initialState: mainPageApplicationsState = {
  data: null,
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
})

export const { setMainPageApplications } = mainPageApplicationsSlice.actions

export const selectMainPageApplications = (
  state: any
): mainPageApplicationsState => state.mainPageApplications

export default mainPageApplicationsSlice.reducer
