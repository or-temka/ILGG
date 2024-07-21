export interface IMyUserPrivacy {
  games: IMyUserPrivacyGames
  inventory: IMyUserPrivacyInventory
  messages: IMyUserPrivacyMessages
  profile: IMyUserPrivacyProfile
}

interface IMyUserPrivacyGames {
  availableToView: 'onlyMe' | 'friends' | 'all'
  availableToViewAchievement: 'onlyMe' | 'friends' | 'all'
}

interface IMyUserPrivacyInventory {
  availableToView: 'onlyMe' | 'friends' | 'all'
}

interface IMyUserPrivacyMessages {
  sendingAvailable: 'friends' | 'all'
  presentSendingAvailable: 'friends' | 'all' | 'nobody'
  inviteAppAvailable: 'friends' | 'nobody'
}

interface IMyUserPrivacyProfile {
  availableToViewMainInfo: 'onlyMe' | 'friends' | 'all'
  availableToSearch: 'friends' | 'all'
  availableToViewRealName: 'onlyMe' | 'friends' | 'all'
  sendCommentInMyProfileAvailable: 'onlyMe' | 'friends' | 'all'
  availableToViewCommentsInMyProfile: 'onlyMe' | 'friends' | 'all'
  availableToViewMyFriends: 'onlyMe' | 'friends' | 'all'
  availableToViewMyProfileLevel: 'onlyMe' | 'friends' | 'all'
  availableToViewMyOnlineStatus: 'onlyMe' | 'friends' | 'all'
}
