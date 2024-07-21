import { createSlice } from '@reduxjs/toolkit'

import MainPageApplicationsState from './interfaces'
import reducers from './reducers'
import extraReducers from './extraReducers'

const initialState: MainPageApplicationsState = {
  data: [],
  loading: true,
  error: null,
}

const mainPageApplicationsSlice = createSlice({
  name: 'mainPageApplications',
  initialState,
  reducers,
  extraReducers,
})

export const { setMainPageApplications } = mainPageApplicationsSlice.actions

export const selectMainPageApplications = (
  state: any
): MainPageApplicationsState => state.mainPageApplications

export default mainPageApplicationsSlice.reducer
