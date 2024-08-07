import { validationResult } from 'express-validator'

import { getDateDifference, serverError } from '../../../utils'
import MailService from '../../../services/MailService'
import { UnauthorizedEmailModel, UserModel } from '../../../models'

const repeatSignUpEmail = async (req: any, res: any) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array())
    }

    const userEmail = req.body.email
    // Проверка на существование такого пользователя с таким Email
    const candidateEmail = await UserModel.findOne({
      email: userEmail,
    })
    if (candidateEmail) {
      return res
        .status(409)
        .json({ errorMsg: 'Пользователь с такой почтой уже существует' })
    }

    const unauthorizedDuplicateEmail = await UnauthorizedEmailModel.findOne({
      email: userEmail,
    })

    const attemptDate = unauthorizedDuplicateEmail?.attemptDate || new Date()
    const dateDifferenceInSeconds = getDateDifference(
      new Date(),
      attemptDate,
      's'
    )

    if (unauthorizedDuplicateEmail && dateDifferenceInSeconds < 60) {
      return res.status(409).json({
        errorMsg: `На вашу почту уже было направлено письмо с подтверждением. Повторное письмо можно будет направить через ${
          60 - dateDifferenceInSeconds
        } с.`,
      })
    }

    const activationCode = unauthorizedDuplicateEmail?.activationCode

    if (!activationCode) {
      return res.status(404).json({
        errorMsg: 'Не удалось отправить письмо с подтверждением на почту',
      })
    }

    try {
      await MailService.sendActivationMailCode(userEmail, activationCode)
      unauthorizedDuplicateEmail.attemptDate = new Date()
      unauthorizedDuplicateEmail.attemptEnterCode = 4
      unauthorizedDuplicateEmail.save()
    } catch (error) {
      return res.status(404).json({
        errorMsg: 'Не удалось отправить письмо с подтверждением на почту',
      })
    }

    res.status(200).json()
  } catch (error: any) {
    serverError(error)
    res.status(500).json({
      errorMsg:
        'Произошла ошибка во время повторной отправки подтверждения на почту.',
    })
  }
}

export default repeatSignUpEmail
