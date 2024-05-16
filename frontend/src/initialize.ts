import { useDispatch } from 'react-redux'

import { setUser } from './redux/slices/myProfileSlice'
import { setFriends } from './redux/slices/friendsSlice'

import { BalanceCurrency } from './interfaces/myProfile'

const useInitialization = () => {
  const dispatch = useDispatch()

  const initialize = () => {
    // set my profile
    dispatch(
      setUser({
        id: 1,
        name: 'Приора',
        login: 'sversys',
        isOnline: true,
        imgName: 'profileImage.jpg',
        balance: {
          currency: BalanceCurrency.rus,
          value: 33,
        },
      })
    )

    //set friends
    dispatch(
      setFriends([
        {
          id: 1,
          name: 'Алина убивца',
          login: 'alina',
          isOnline: true,
          imgName: 'alina.jpg',
        },
        {
          id: 2,
          name: 'Freevel',
          login: 'freevel',
          isOnline: true,
          imgName: 'serega.jpg',
        },
        {
          id: 3,
          name: 'мухтар в снегу 3000',
          login: 'myhtar',
          isOnline: false,
          imgName: 'myhtar.jpg',
        },
      ])
    )
  }

  return initialize
}

export default useInitialization
