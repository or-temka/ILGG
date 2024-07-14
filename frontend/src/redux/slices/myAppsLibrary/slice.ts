import { createSlice } from '@reduxjs/toolkit'

import AppsLibraryState from './interfaces'
import reducers from './reducers'

const initialState: AppsLibraryState = {
  data: null,
  loading: true,
  error: null,
}

const myAppsLibrarySlice = createSlice({
  name: 'myAppsLibrary',
  initialState,
  reducers,
})

export const { setLibraryApps } = myAppsLibrarySlice.actions

export const selectApps = (state: any): AppsLibraryState => state.myAppsLibrary
export const selectAppsData = (state: any): AppsLibraryState =>
  state.myAppsLibrary.data

export default myAppsLibrarySlice.reducer
