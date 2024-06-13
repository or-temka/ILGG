import { validationResult } from 'express-validator'
import { v4 as uuidv4 } from 'uuid'

import { serverError } from '../../../utils/serverLog'

import UserModel from '../../../models/User'
import UnauthorizedEmailModel from '../../../models/UnauthorizedEmailModel'

import MailService from '../../../services/MailService'
import getDateDifference from '../../../utils/math/date/getDateDifference'
import generateNumericCode from '../../../utils/math/generate/generateNumericCode'

const regEmail = async (req: any, res: any) => {
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

    const expireAtDate = unauthorizedDuplicateEmail?.expireAt || new Date()
    const dateDifferenceInMinutes = getDateDifference(
      new Date(),
      expireAtDate,
      'm'
    )

    if (unauthorizedDuplicateEmail) {
      return res.status(409).json({
        errorMsg: `На вашу почту уже было направлено письмо с подтверждением. Повторное письмо можно будет направить через ${dateDifferenceInMinutes} минут.`,
      })
    }

    const activationLink = uuidv4()
    const activationCode = generateNumericCode(6)

    const doc = new UnauthorizedEmailModel({
      email: userEmail,
      activationCode,
      activationLink,
    })

    try {
      await MailService.sendActivationMailCode(userEmail, activationCode)
    } catch (error) {
      return res.status(404).json({
        errorMsg: 'Не удалось отправить письмо с подтверждением на почту',
      })
    }

    // Для активации по ссылке
    // try {
    //   await MailService.sendActivationMailLink(
    //     userEmail,
    //     `${SITE_API_URL}${BASE_API_URL}${userRouteEnvironment.base}/activate/${activationLink}`
    //   )
    // } catch (error) {
    //   return res.status(404).json({
    //     errorMsg: 'Не удалось отправить письмо с подтверждением на почту',
    //   })
    // }

    await doc.save()

    res.status(200).json()
  } catch (error: any) {
    serverError(error)
    res.status(500).json({
      errorMsg: 'Произошла ошибка во время отправки сообщения на почту.',
    })
  }
}

export default regEmail
