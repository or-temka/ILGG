import { myUser } from 'models'

const formDefaultValues = (
  myUserPrivacy: myUser.IMyUserPrivacy | undefined
): myUser.IMyUserPrivacy | {} =>
  myUserPrivacy
    ? {
        games: {
          availableToView: myUserPrivacy.games.availableToView,
          availableToViewAchievement:
            myUserPrivacy.games.availableToViewAchievement,
        },
        inventory: {
          availableToView: myUserPrivacy.inventory.availableToView,
        },
        messages: {
          sendingAvailable: myUserPrivacy.messages.sendingAvailable,
          presentSendingAvailable:
            myUserPrivacy.messages.presentSendingAvailable,
          inviteAppAvailable: myUserPrivacy.messages.inviteAppAvailable,
        },
        profile: {
          availableToViewMainInfo:
            myUserPrivacy.profile.availableToViewMainInfo,
          availableToSearch: myUserPrivacy.profile.availableToSearch,
          availableToViewRealName:
            myUserPrivacy.profile.availableToViewRealName,
          sendCommentInMyProfileAvailable:
            myUserPrivacy.profile.sendCommentInMyProfileAvailable,
          availableToViewCommentsInMyProfile:
            myUserPrivacy.profile.availableToViewCommentsInMyProfile,
          availableToViewMyFriends:
            myUserPrivacy.profile.availableToViewMyFriends,
          availableToViewMyProfileLevel:
            myUserPrivacy.profile.availableToViewMyProfileLevel,
          availableToViewMyOnlineStatus:
            myUserPrivacy.profile.availableToViewMyOnlineStatus,
        },
      }
    : {}

export default formDefaultValues
