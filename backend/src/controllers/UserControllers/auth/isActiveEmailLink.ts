import { validationResult } from 'express-validator'

import { UnauthorizedEmailModel } from '../../../models'
import { serverError } from '../../../utils'

const isActiveEmailLink = async (req: any, res: any) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array())
    }

    const userEmail = req.query.email
    const activationLink = req.query.activationLink

    const unauthorizedEmail = await UnauthorizedEmailModel.findOne({
      email: userEmail,
    })

    if (unauthorizedEmail?.activationLink !== activationLink) {
      return res.status(404).json({
        errorMsg: 'Не найден запущенный процесс регистрации.',
      })
    }

    res.status(200).json()
  } catch (error: any) {
    serverError(error)
    res.status(500).json({
      errorMsg: 'Произошла ошибка во время получения процесса регистрации.',
    })
  }
}

export default isActiveEmailLink
