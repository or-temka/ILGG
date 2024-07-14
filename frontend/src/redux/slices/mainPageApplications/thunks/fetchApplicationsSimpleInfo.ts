// Запрос на получение приложений
import { createAsyncThunk } from '@reduxjs/toolkit'

import { ISimpleApplication } from 'models/application/ISimpleApplication'

const fetchApplicationsSimpleInfo = createAsyncThunk(
  'mainPageApplications/fetchApplicationsSimpleInfo',
  async () => {
    const returnedData: ISimpleApplication[] = [
      {
        _id: 1,
        name: 'Find Number',
        imgSrc: 'find-number/poster.jpg',
        aboutApp:
          'Игра, в которой вам предстоит находить числа на экране на время. Соревнуйтесь с друзьями за лучший результат и развивайте свою внимательность.',
        isNewApp: true,
      },
    ]
    return returnedData
  }
)

export default fetchApplicationsSimpleInfo
