import { serverError } from '../../../utils/serverLog'

import TokenService from '../../../services/TokenService'
import { FullUserDto } from '../../../dtos'
import { UserModel } from '../../../models'

const refresh = async (req: any, res: any) => {
  try {
    const { refreshToken } = req.cookies

    if (!refreshToken) {
      return res.status(401).json({
        errorMsg: 'Не получен токен доступа.',
      })
    }

    const userData = TokenService.validateRefreshToken(refreshToken)
    const tokenFromDB = await TokenService.findToken(refreshToken)
    if (!userData || !tokenFromDB || typeof userData === 'string') {
      return res.status(401).json({
        errorMsg: 'Пользователь не авторизован.',
      })
    }

    const user = await UserModel.findById(userData._id)

    const userDto = new FullUserDto(user)
    const tokens = TokenService.generateTokens({ ...userDto })

    await TokenService.saveToken(userDto._id, tokens.refreshToken)

    // Сохранение Cookies
    res.cookie('refreshToken', tokens.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1_000,
      httpOnly: true,
      // secure: true, // Для HTTPS
    })

    res.json({ ...tokens, user: userDto })
  } catch (error: any) {
    serverError(error)
    res.status(500).json({
      errorMsg: 'Произошла ошибка входа в аккаунт.',
    })
  }
}

export default refresh
