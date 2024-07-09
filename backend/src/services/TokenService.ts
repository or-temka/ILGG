import jwt from 'jsonwebtoken'
import TokenModel from '../models/Token/Token'

import { JWT_ACCESS_KEY, JWT_REFRESH_KEY } from '../PASSWORDS'

class TokenService {
  generateTokens(payload: any) {
    const accessToken = jwt.sign(payload, JWT_ACCESS_KEY, { expiresIn: '15m' })
    const refreshToken = jwt.sign(payload, JWT_REFRESH_KEY, {
      expiresIn: '30d',
    })

    return { accessToken, refreshToken }
  }

  validateAccessToken(token: string) {
    try {
      const userData = jwt.verify(token, JWT_ACCESS_KEY)
      return userData
    } catch (error) {
      return null
    }
  }

  validateRefreshToken(token: string) {
    try {
      const userData = jwt.verify(token, JWT_REFRESH_KEY)
      return userData
    } catch (error) {
      return null
    }
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

  async removeToken(refreshToken: string) {
    await TokenModel.deleteOne({ refreshToken })
  }

  async findToken(refreshToken: string) {
    const tokenData = await TokenModel.findOne({ refreshToken })
    return tokenData
  }
}

export default new TokenService()
