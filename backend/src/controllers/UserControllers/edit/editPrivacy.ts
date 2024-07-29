import UserDto from '../../../dtos/MyUserDto'
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

    // games
    privacy.games.availableToView =
      privacyBody.games?.availableToView ?? privacy.games.availableToView

    privacy.games.availableToViewAchievement =
      privacyBody.games?.availableToViewAchievement ??
      privacy.games.availableToViewAchievement

    // inventory
    privacy.inventory.availableToView =
      privacyBody.inventory?.availableToView ??
      privacy.inventory.availableToView

    // messages
    privacy.messages.sendingAvailable =
      privacyBody.messages?.sendingAvailable ??
      privacy.messages.sendingAvailable

    privacy.messages.presentSendingAvailable =
      privacyBody.messages?.presentSendingAvailable ??
      privacy.messages.presentSendingAvailable

    privacy.messages.inviteAppAvailable =
      privacyBody.messages?.inviteAppAvailable ??
      privacy.messages.inviteAppAvailable

    // profile
    privacy.profile.availableToViewMainInfo =
      privacyBody.profile?.availableToViewMainInfo ??
      privacy.profile.availableToViewMainInfo

    privacy.profile.availableToSearch =
      privacyBody.profile?.availableToSearch ??
      privacy.profile.availableToSearch

    privacy.profile.availableToViewRealName =
      privacyBody.profile?.availableToViewRealName ??
      privacy.profile.availableToViewRealName

    privacy.profile.sendCommentInMyProfileAvailable =
      privacyBody.profile?.sendCommentInMyProfileAvailable ??
      privacy.profile.sendCommentInMyProfileAvailable

    privacy.profile.availableToViewCommentsInMyProfile =
      privacyBody.profile?.availableToViewCommentsInMyProfile ??
      privacy.profile.availableToViewCommentsInMyProfile

    privacy.profile.availableToViewMyFriends =
      privacyBody.profile?.availableToViewMyFriends ??
      privacy.profile.availableToViewMyFriends

    privacy.profile.availableToViewMyProfileLevel =
      privacyBody.profile?.availableToViewMyProfileLevel ??
      privacy.profile.availableToViewMyProfileLevel

    privacy.profile.availableToViewMyOnlineStatus =
      privacyBody.profile?.availableToViewMyOnlineStatus ??
      privacy.profile.availableToViewMyOnlineStatus

    User.save()

    const userDto = new UserDto(User)
    res.json({ user: userDto })
  } catch (error: any) {
    serverError(error)
    res.status(500).json({
      message: 'Произошла ошибка изменения основных данных пользователя',
    })
  }
}

export default editPrivacy
