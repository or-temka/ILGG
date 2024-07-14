import { configureStore } from '@reduxjs/toolkit'

import floatingPanelsQueueReducer from './slices/floatingPanelsQueue/slice'
import myProfileSlice from './slices/myProfile/slice'
import friendsSlice from './slices/friendsSlice/slice'
import mainPageApplicationsSlice from './slices/mainPageApplications/slice'
import shopAppsSlice from './slices/shopAppsSlice'
import myAppsLibrarySlice from './slices/myAppsLibrary/slice'

const store = configureStore({
  reducer: {
    floatingPanelsQueue: floatingPanelsQueueReducer,
    myProfile: myProfileSlice,
    friends: friendsSlice,

    mainPageApplications: mainPageApplicationsSlice,
    shopApps: shopAppsSlice,
    myAppsLibrary: myAppsLibrarySlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
