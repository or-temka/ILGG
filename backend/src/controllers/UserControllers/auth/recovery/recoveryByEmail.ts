import { v4 as uuidv4 } from 'uuid'

import { serverError } from '../../../../utils/serverLog'

import UserModel from '../../../../models/User/User'

import MailService from '../../../../services/MailService'
import getDateDifference from '../../../../utils/math/date/getDateDifference'
import generateNumericCode from '../../../../utils/math/generate/generateNumericCode'
import RecoveryEmailModel from '../../../../models/RecoveryEmail/RecoveryEmail'

const recoveryByEmail = async (req: any, res: any) => {
  try {
    const userLoginOrEmail = req.body.userLoginOrEmail

    // Проверка на существование такого пользователя с таким Email
    const candidate = await UserModel.findOne({
      $or: [{ login: userLoginOrEmail }, { email: userLoginOrEmail }],
    })
    if (!candidate) {
      return res.status(404).json({ errorMsg: 'Пользователь не найден' })
    }

    const recoveryEmail = await RecoveryEmailModel.findOne({
      email: candidate.email,
    })

    const expireAtDate = recoveryEmail?.expireAt || new Date()
    const dateDifferenceInMinutes = getDateDifference(
      new Date(),
      expireAtDate,
      'm'
    )

    if (recoveryEmail) {
      return res.status(409).json({
        errorMsg: `На вашу почту уже было направлено письмо с подтверждением. Повторное письмо можно будет направить через ${dateDifferenceInMinutes} минут.`,
      })
    }

    const activationLink = uuidv4()
    const activationCode = generateNumericCode(6)

    const doc = new RecoveryEmailModel({
      email: candidate.email,
      activationCode,
      activationLink,
    })

    try {
      await MailService.sendRecoveryMailCode(candidate.email, activationCode)
    } catch (error) {
      return res.status(404).json({
        errorMsg: 'Не удалось отправить письмо с подтверждением на почту',
      })
    }

    await doc.save()

    res.status(200).json()
  } catch (error: any) {
    serverError(error)
    res.status(500).json({
      errorMsg: 'Произошла ошибка во время отправки сообщения на почту.',
    })
  }
}

export default recoveryByEmail
