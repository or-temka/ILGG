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

    privacy.games.onlyAvailableToMe =
      privacyBody.games?.onlyAvailableToMe ?? privacy.games.onlyAvailableToMe

    privacy.inventory.onlyAvailableToMe =
      privacyBody.inventory?.onlyAvailableToMe ??
      privacy.inventory.onlyAvailableToMe

    privacy.inventory.onlyAvailableToMeAndFriends =
      privacyBody.inventory?.onlyAvailableToMeAndFriends ??
      privacy.inventory.onlyAvailableToMeAndFriends

    privacy.messages.onlyFriendMessages =
      privacyBody.messages?.onlyFriendMessages ??
      privacy.messages.onlyFriendMessages

    privacy.profile.mainInfoOnlyFriends =
      privacyBody.profile?.mainInfoOnlyFriends ??
      privacy.profile.mainInfoOnlyFriends

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
