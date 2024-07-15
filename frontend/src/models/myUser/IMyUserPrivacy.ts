export interface IMyUserPrivacy {
  games: {
    onlyAvailableToMe: boolean
  }
  inventory: {
    onlyAvailableToMe: boolean
    onlyAvailableToMeAndFriends: boolean
  }
  messages: {
    onlyFriendMessages: boolean
  }
  profile: {
    mainInfoOnlyFriends: boolean
  }
}
