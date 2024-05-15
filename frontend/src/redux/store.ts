import { configureStore } from '@reduxjs/toolkit'
import floatingPanelsQueueReducer from './slices/floatingPanelsQueueSlice'
import myProfileSlice from './slices/myProfileSlice'

const store = configureStore({
  reducer: {
    floatingPanelsQueue: floatingPanelsQueueReducer,
    myProfile: myProfileSlice,
  },
})

export default store
