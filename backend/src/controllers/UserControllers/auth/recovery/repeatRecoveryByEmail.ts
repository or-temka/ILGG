import MailService from '../../../../services/MailService'
import { RecoveryEmailModel, UserModel } from '../../../../models'
import { getDateDifference, serverError } from '../../../../utils'

const repeatRecoveryByEmail = async (req: any, res: any) => {
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

    const attemptDate = recoveryEmail?.attemptDate || new Date()
    const dateDifferenceInSeconds = getDateDifference(
      new Date(),
      attemptDate,
      's'
    )

    if (recoveryEmail && dateDifferenceInSeconds < 60) {
      return res.status(409).json({
        errorMsg: `На вашу почту уже было направлено письмо с подтверждением. Повторное письмо можно будет направить через ${
          60 - dateDifferenceInSeconds
        } с.`,
      })
    }

    const activationCode = recoveryEmail?.activationCode

    if (!activationCode) {
      return res.status(404).json({
        errorMsg: 'Не удалось отправить письмо с подтверждением на почту',
      })
    }

    try {
      await MailService.sendActivationMailCode(candidate.email, activationCode)
      recoveryEmail.attemptDate = new Date()
      recoveryEmail.attemptEnterCode = 4
      recoveryEmail.save()
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

export default repeatRecoveryByEmail
