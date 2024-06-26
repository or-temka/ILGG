import { serverError } from '../../../utils/serverLog'

import UserModel from '../../../models/User'

import TokenService from '../../../services/TokenService'
import UserDto from '../../../dtos/MyUserDto'

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

    const user = await UserModel.findById(userData.id)

    const userDto = new UserDto(user)
    const tokens = TokenService.generateTokens({ ...userDto })

    await TokenService.saveToken(userDto.id, tokens.refreshToken)

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
