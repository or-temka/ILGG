import { useDispatch } from 'react-redux'
import { AppDispatch } from './redux/store'

import fetchFriends from './redux/slices/friendsSlice/thunks/fetchFriends'
import { setSiteThemeFromLocalStorage } from './utils/changeSiteTheme'
import checkAuth from './redux/slices/myProfile/thunks/checkAuth'

const useInitialization = () => {
  const dispatch = useDispatch<AppDispatch>()

  const initialize = () => {
    if (localStorage.getItem('token')) {
      dispatch<any>(checkAuth())
    }
    // setting site theme
    setSiteThemeFromLocalStorage()

    //set friends
    dispatch(fetchFriends())

    // seconds
  }

  return initialize
}

export default useInitialization
