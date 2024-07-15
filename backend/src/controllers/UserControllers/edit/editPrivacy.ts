import { serverError } from '../../../utils/serverLog'
import { UserInterface } from 'src/models/User/interfaces/UserInterface'
import { PrivacyInterface } from 'src/models/User/Scheme/Privacy/interfaces/PrivacyInterface'

interface PrivacyBodyInterface {
  games?: PrivacyInterface['games']
  inventory?: PrivacyInterface['inventory']
  messages?: PrivacyInterface['messages']
  profile?: PrivacyInterface['profile']
}

const editPrivacy = async (req: any, res: any) => {
  try {
    const User = req.User
    const privacyBody: PrivacyBodyInterface = req.body

    const privacy: UserInterface['privacy'] = User.privacy

    privacy.games.availableToView =
      privacyBody.games?.availableToView ?? privacy.games.availableToView

    privacy.inventory.availableToView =
      privacyBody.inventory?.availableToView ??
      privacy.inventory.availableToView

    privacy.inventory.availableToView =
      privacyBody.inventory?.availableToView ??
      privacy.inventory.availableToView

    privacy.messages.sendingAvailable =
      privacyBody.messages?.sendingAvailable ??
      privacy.messages.sendingAvailable

    privacy.profile.availableToViewMainInfo =
      privacyBody.profile?.availableToViewMainInfo ??
      privacy.profile.availableToViewMainInfo

    privacy.profile.availableToSearch =
      privacyBody.profile?.availableToSearch ??
      privacy.profile.availableToSearch

    User.save()

    res.json(User)
  } catch (error: any) {
    serverError(error)
    res.status(500).json({
      message: 'Произошла ошибка изменения основных данных пользователя',
    })
  }
}

export default editPrivacy
