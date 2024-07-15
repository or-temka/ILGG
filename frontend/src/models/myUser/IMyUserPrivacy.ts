export interface IMyUserPrivacy {
  games: IMyUserPrivacyGames
  inventory: IMyUserPrivacyInventory
  messages: IMyUserPrivacyMessages
  profile: IMyUserPrivacyProfile
}

interface IMyUserPrivacyGames {
  availableToView: 'onlyMe' | 'friends' | 'all'
}

interface IMyUserPrivacyInventory {
  availableToView: 'onlyMe' | 'friends' | 'all'
}

interface IMyUserPrivacyMessages {
  sendingAvailable: 'friends' | 'all'
}

interface IMyUserPrivacyProfile {
  availableToViewMainInfo: 'onlyMe' | 'friends' | 'all'
  availableToSearch: 'friends' | 'all'
}
