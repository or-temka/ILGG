
import { serverError } from '../../../utils'
import TokenService from '../../../services/TokenService'

const logOut = async (req: any, res: any) => {
  try {
    const { refreshToken } = req.cookies

    if (!refreshToken) {
      return res.status(404).json({
        errorMsg: 'В запросе не найден Cookie токена доступа',
      })
    }

    await TokenService.removeToken(refreshToken)

    res.clearCookie('refreshToken')
    return res.status(200).json()
  } catch (error: any) {
    serverError(error)
    res.status(500).json({
      errorMsg: 'Произошла ошибка входа в аккаунт.',
    })
  }
}

export default logOut
