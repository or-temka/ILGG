import { useDispatch } from 'react-redux'
import { AppDispatch } from './redux/store'

import { fetchFriends } from './redux/slices/friendsSlice'
import { setSiteThemeFromLocalStorage } from './utils/changeSiteTheme'

const useInitialization = () => {
  const dispatch = useDispatch<AppDispatch>()

  const initialize = () => {
    // setting site theme
    setSiteThemeFromLocalStorage()

    //set friends
    dispatch(fetchFriends())

    // seconds
  }

  return initialize
}

export default useInitialization
