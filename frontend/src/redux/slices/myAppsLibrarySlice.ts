import { createSlice } from '@reduxjs/toolkit'

import { IAppFromLibrary } from '@shared/interfaces/application'

//#region reducers interfaces
interface ReducerAction {
  type: string
}
interface SetLibraryAppsAction extends ReducerAction {
  payload: IAppFromLibrary[] | null
}
//#endregion

export type AppsLibraryState = {
  data: IAppFromLibrary[] | null
  loading: boolean
  error: string | null | undefined
}

const initialState: AppsLibraryState = {
  data: null,
  loading: true,
  error: null,
}

const myAppsLibrarySlice = createSlice({
  name: 'myAppsLibrary',
  initialState,
  reducers: {
    setLibraryApps: (
      state: AppsLibraryState,
      action: SetLibraryAppsAction
    ): any => ({
      data: action.payload,
      loading: false,
      error: null,
    }),
  },
})

export const { setLibraryApps } = myAppsLibrarySlice.actions

export const selectApps = (state: any): AppsLibraryState => state.myAppsLibrary
export const selectAppsData = (state: any): AppsLibraryState =>
  state.myAppsLibrary.data

export default myAppsLibrarySlice.reducer
