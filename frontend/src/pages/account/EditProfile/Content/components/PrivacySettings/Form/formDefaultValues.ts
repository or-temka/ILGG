import { IMyUserPrivacy } from 'models/myUser/IMyUserPrivacy'

const formDefaultValues = (myUserPrivacy: IMyUserPrivacy | undefined) => ({
  games: { onlyAvailableToMe: myUserPrivacy?.games.onlyAvailableToMe },
  inventory: {
    onlyAvailableToMe: myUserPrivacy?.inventory.onlyAvailableToMe,
    onlyAvailableToMeAndFriends:
      myUserPrivacy?.inventory.onlyAvailableToMeAndFriends,
  },
  messages: {
    onlyFriendMessages: myUserPrivacy?.messages.onlyFriendMessages,
  },
  profile: {
    mainInfoOnlyFriends: myUserPrivacy?.profile.mainInfoOnlyFriends,
  },
})

export default formDefaultValues
