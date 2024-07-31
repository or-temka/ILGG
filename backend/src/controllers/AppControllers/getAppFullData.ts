import { Request, Response } from 'express'

import { AppModel } from '../../models'
import { isMongoId, serverError } from '../../utils'

const getAppFullData = async (req: Request, res: Response) => {
  try {
    const appId = req.params.appId

    if (!appId) {
      return res.status(400).json({
        errorMsg: 'В запросе не указан ID приложения.',
      })
    }

    if (!isMongoId(appId)) {
      return res.status(400).json({
        errorMsg: 'Указанный ID не соответствует формату.',
      })
    }

    const application = await AppModel.findById(appId)

    if (!application) {
      return res.status(404).json({
        errorMsg: 'Приложение не найдено.',
      })
    }

    const fullAppData = application.toObject()

    const appData = {
      _id: fullAppData._id,
      name: fullAppData.name,
      aboutApp: fullAppData.aboutApp,
      isNewApp: fullAppData.isNewApp,
    }

    res.json(appData)
  } catch (error: any) {
    serverError(error)
    res.status(500).json({
      errorMsg: 'Ошибка получения данных о пользователе.',
    })
  }
}

export default getAppFullData
