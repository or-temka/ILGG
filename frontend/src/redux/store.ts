import { configureStore } from '@reduxjs/toolkit'

import floatingPanelsQueueReducer from './slices/floatingPanelsQueueSlice'
import myProfileSlice from './slices/myProfileSlice'
import friendsSlice from './slices/friendsSlice'
import mainPageApplicationsSlice from './slices/mainPageApplicationsSlice'

const store = configureStore({
  reducer: {
    floatingPanelsQueue: floatingPanelsQueueReducer,
    myProfile: myProfileSlice,
    friends: friendsSlice,

    mainPageApplications: mainPageApplicationsSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
