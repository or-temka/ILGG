import { createAsyncThunk } from '@reduxjs/toolkit'

import { IShopApplication } from 'models/application/IShopApplication'

// запрос на программы для магазина
const fetchShopApps = createAsyncThunk('shopApps/fetchShopApps', async () => {
  const returnedData: IShopApplication[] = [
    {
      _id: 1,
      name: 'Find number',
      aboutApp: 'Немного об этом приложении',
      developer: 'ILGG',
      imgSrc: 'find-number/poster.jpg',
      isNewApp: true,
      types: [2],
      categories: [1, 2],
      playerTypes: [1],
      themes: [1],
      rating: 5,
      releaseDate: '10-12-2002',
      statistics: { views: { month: 100, week: 20, day: 4 } },
    },
    {
      _id: 2,
      name: 'Игра номер 2',
      aboutApp: 'Капельку о второй игре',
      developer: 'ILGG',
      imgSrc: 'find-number/poster.jpg',
      isNewApp: false,
      types: [1],
      categories: [2, 3],
      playerTypes: [1],
      themes: [1],
      price: 0,
      rating: 3,
      releaseDate: '2-11-2002',
      statistics: { views: { month: 1, week: 20, day: 4 } },
    },
    {
      _id: 3,
      name: 'three game',
      aboutApp: 'Немного об этом приложении',
      developer: 'ILGG',
      imgSrc: 'find-number/poster.jpg',
      isNewApp: true,
      types: [1],
      categories: [1, 4],
      playerTypes: [1],
      themes: [1],
      price: 100,
      releaseDate: '5-01-2003',
      statistics: { views: { month: 1000, week: 20, day: 4 } },
    },
    {
      _id: 4,
      name: 'третья gamesk',
      aboutApp: 'Немного об этом приложении',
      developer: 'ILGG',
      imgSrc: 'find-number/poster.jpg',
      isNewApp: false,
      types: [2],
      categories: [5],
      playerTypes: [1],
      themes: [1],
      price: 200,
      rating: 1,
      releaseDate: '3-08-1999',
      statistics: { views: { month: 300, week: 20, day: 4 } },
    },
  ]
  return returnedData
})

export default fetchShopApps
