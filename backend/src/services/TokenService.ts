import jwt from 'jsonwebtoken'
import TokenModel from '../models/TokenModel'

import { JWT_ACCESS_KEY, JWT_REFRESH_KEY } from '../PASSWORDS'

class TokenService {
  generateTokens(payload: any) {
    const accessToken = jwt.sign(payload, JWT_ACCESS_KEY, { expiresIn: '30m' })
    const refreshToken = jwt.sign(payload, JWT_REFRESH_KEY, {
      expiresIn: '30d',
    })

    return { accessToken, refreshToken }
  }

  async saveToken(userId: any, refreshToken: string) {
    // При таком подходе нельзя сидеть с двух устройств
    const tokenData = await TokenModel.findOne({ user: userId })
    if (tokenData) {
      tokenData.refreshToken = refreshToken
      return tokenData.save()
    }
    // Если пользователь ещё не логинился
    const token = await TokenModel.create({ user: userId, refreshToken })
    return token
  }
}

export default new TokenService()
