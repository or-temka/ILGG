import { serverError, serverMsg } from '../utils/serverLog'

import TokenService from '../services/TokenService'

// Check user Authorization via token
export default (req: any, res: any, next: Function) => {
  try {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '')

    if (!token) {
      serverMsg('Попытка получить доступ: не указан токен в запросе')
      return res.status(403).json({
        errorMsg: 'Нет доступа к запрашиваемому ресурсу',
      })
    }

    try {
      const userData = TokenService.validateAccessToken(token)
      if (!userData || typeof userData !== 'object') {
        serverMsg('Попытка получить доступ: токен не валиден')
        return res.status(403).json({
          errorMsg: 'Нет доступа к запрашиваемому ресурсу',
        })
      }

      req.user = userData
      next()
    } catch (error: any) {
      serverError(error)
      res.status(403).json({
        errorMsg: 'Нет доступа к запрашиваемому ресурсу',
      })
    }
  } catch (error: any) {
    serverError(error)
    res.status(500).json({
      errorMsg: 'Произошла ошибка аутентификации',
    })
  }
}
