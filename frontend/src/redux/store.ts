import { configureStore } from '@reduxjs/toolkit'

import floatingPanelsQueueReducer from './slices/floatingPanelsQueueSlice'
import myProfileSlice from './slices/myProfileSlice'
import friendsSlice from './slices/friendsSlice'

const store = configureStore({
  reducer: {
    floatingPanelsQueue: floatingPanelsQueueReducer,
    myProfile: myProfileSlice,
    friends: friendsSlice,
  },
})

export default store
