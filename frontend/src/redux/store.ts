import { configureStore } from '@reduxjs/toolkit'
import floatingPanelsQueueReducer from './slices/floatingPanelsQueueSlice'

const store = configureStore({
  reducer: {
    floatingPanelsQueue: floatingPanelsQueueReducer,
  },
})

export default store
