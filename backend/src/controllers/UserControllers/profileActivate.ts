import UserModel from '../../models/User'

import { serverError } from '../../utils/serverLog'

import { SITE_FULL_URL } from '../../variables'

const profileActivate = async (req: any, res: any) => {
  try {
    const activationLink = req.params.link

    const user = await UserModel.findOne({ activationLink })
    if (!user) {
      return res.status(404).json({
        errorMsg: 'Пользователь с подтверждением аккаунта не найден.',
      })
    }

    user.isActivated = true
    await user.save()

    res.redirect(SITE_FULL_URL)
  } catch (error: any) {
    serverError(error)
    res.status(500).json({
      errorMsg: 'Произошла ошибка активации аккаунта.',
    })
  }
}

export default profileActivate
