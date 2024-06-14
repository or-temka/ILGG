import { validationResult } from 'express-validator'

import { serverError } from '../../../../utils/serverLog'

import UserModel from '../../../../models/User'
import RecoveryEmailModel from '../../../../models/RecoveryEmailModel'

const checkRecoveryEmailCode = async (req: any, res: any) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array())
    }

    const userEmailOrLogin = req.query.userEmailOrLogin
    const activationCode = req.query.activationCode

    const user = await UserModel.findOne({
      $or: [{ login: userEmailOrLogin }, { email: userEmailOrLogin }],
    })
    if (!user) {
      return res.status(404).json({
        errorMsg: 'Пользователь не найден.',
      })
    }

    const recoveryEmail = await RecoveryEmailModel.findOne({
      email: user.email,
    })
    if (!recoveryEmail) {
      return res.status(403).json({
        errorMsg:
          'Процесс восстановления аккаунта через Email не нечат или завершен.',
      })
    }

    const attemptCode = recoveryEmail.attemptEnterCode
    if (!attemptCode) {
      return res.status(403).json({
        errorMsg:
          'У вас закончились попытки активации. Повторите регистрацию позже.',
      })
    }

    if (recoveryEmail.activationCode !== activationCode) {
      recoveryEmail.attemptEnterCode = attemptCode - 1
      recoveryEmail.save()
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

    res
      .status(200)
      .json({ activationLink: recoveryEmail.activationLink, email: user.email })
  } catch (error: any) {
    serverError(error)
    res.status(500).json({
      errorMsg: 'Произошла ошибка во время отправки сообщения на почту.',
    })
  }
}

export default checkRecoveryEmailCode
