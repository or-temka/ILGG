import { validationResult } from 'express-validator'

import { serverError } from '../../../utils/serverLog'

import UnauthorizedEmailModel from '../../../models/UnauthorizedEmailModel'

const checkEmailCode = async (req: any, res: any) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array())
    }

    const userEmail = req.body.email
    const activationCode = req.body.activationCode

    const unauthorizedEmail = await UnauthorizedEmailModel.findOne({
      email: userEmail,
    })

    if (!unauthorizedEmail) {
      return res.status(403).json({
        errorMsg: 'Процесс регистрации Email не нечат или завершен.',
      })
    }

    const attemptCode = unauthorizedEmail.attemptEnterCode

    if (!attemptCode) {
      return res.status(403).json({
        errorMsg:
          'У вас закончились попытки активации. Повторите регистрацию позже.',
      })
    }

    if (unauthorizedEmail.activationCode !== activationCode) {
      unauthorizedEmail.attemptEnterCode = attemptCode - 1
      unauthorizedEmail.save()
      if (attemptCode > 3) {
        return res.status(403).json({
          errorMsg: 'Указан неверный код активации.',
        })
      } else {
        return res.status(403).json({
          errorMsg: `Указан неверный код активации. У вас осталось попыток: ${
            attemptCode - 1
          }`,
        })
      }
    }

    res.status(200).json({ activationLink: unauthorizedEmail.activationLink })
  } catch (error: any) {
    serverError(error)
    res.status(500).json({
      errorMsg: 'Произошла ошибка во время отправки сообщения на почту.',
    })
  }
}

export default checkEmailCode
