// Запрос на друзей
import { createAsyncThunk } from '@reduxjs/toolkit'

import { IUserProfile } from 'models/user/IUserProfile'

const fetchFriends = createAsyncThunk('friends/fetchFriends', async () => {
  const returnedData: IUserProfile[] = [
    {
      _id: 1,
      name: 'Алина убивца',
      login: 'alina',
      isOnline: true,
      imgName: 'alina.jpg',
    },
    {
      _id: 2,
      name: 'Freevel',
      login: 'freevel',
      isOnline: true,
      imgName: 'serega.jpg',
    },
    {
      _id: 3,
      name: 'мухтар в снегу 3000',
      login: 'myhtar',
      isOnline: false,
      imgName: 'myhtar.jpg',
    },
  ]
  return returnedData
})

export default fetchFriends
