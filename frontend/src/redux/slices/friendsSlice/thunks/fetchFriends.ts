// Запрос на друзей
import { createAsyncThunk } from '@reduxjs/toolkit'

import { user } from 'models'

const fetchFriends = createAsyncThunk('friends/fetchFriends', async () => {
  const returnedData: user.IUserProfile[] = [
    {
      _id: 1,
      name: 'Алина убивца',
      login: 'alina',
      isOnline: true,
      imgName: 'alina.jpg',
      avatar: null,
    },
    {
      _id: 2,
      name: 'Freevel',
      login: 'freevel',
      isOnline: true,
      imgName: 'serega.jpg',
      avatar: null,
    },
    {
      _id: 3,
      name: 'мухтар в снегу 3000',
      login: 'myhtar',
      isOnline: false,
      imgName: 'myhtar.jpg',
      avatar: null,
    },
  ]
  return returnedData
})

export default fetchFriends
