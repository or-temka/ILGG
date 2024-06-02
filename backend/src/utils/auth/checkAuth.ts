import jwt from 'jsonwebtoken'

import { TOKEN_KEY } from '../../PASSWORDS.js'

import { serverError, serverMsg } from '../serverLog.js'

// Check user Authorization via token
export default (req: any, res: any, next: Function) => {
  const token = (req.headers.authorization || '').replace(/Bearer\s?/, '')

  if (!token) {
    serverMsg('Попытка получить доступ: не указан токен в запросе')
    return res.status(403).json({
      errorMsg: 'Нет доступа к запрашиваемому ресурсу',
    })
  }

  try {
    const decodedToken = jwt.verify(token, TOKEN_KEY)
    if (typeof decodedToken === 'object') {
      req.userId = decodedToken._id
      req.userRole = decodedToken.role
      next()
    }
  } catch (err: any) {
    serverError(err)
    res.status(403).json({
      errorMsg: 'Нет доступа к запрашиваемому ресурсу',
    })
  }
}
