import { useDispatch } from 'react-redux'
import { AppDispatch } from './redux/store'

import { fetchProfileInfo } from './redux/slices/myProfileSlice'
import { fetchFriends, setFriends } from './redux/slices/friendsSlice'

const useInitialization = () => {
  const dispatch = useDispatch<AppDispatch>()

  const initialize = () => {
    dispatch(fetchProfileInfo())

    //set friends
    dispatch(fetchFriends())

    // seconds
  }

  return initialize
}

export default useInitialization
