import { IMyUserPrivacy } from 'models/myUser/IMyUserPrivacy'

const formDefaultValues = (
  myUserPrivacy: IMyUserPrivacy | undefined
): IMyUserPrivacy | {} =>
  myUserPrivacy
    ? {
        games: {
          availableToView: myUserPrivacy.games.availableToView,
        },
        inventory: {
          availableToView: myUserPrivacy.inventory.availableToView,
        },
        messages: {
          sendingAvailable: myUserPrivacy.messages.sendingAvailable,
        },
        profile: {
          availableToViewMainInfo:
            myUserPrivacy.profile.availableToViewMainInfo,
          availableToSearch: myUserPrivacy.profile.availableToSearch,
        },
      }
    : {}

export default formDefaultValues
