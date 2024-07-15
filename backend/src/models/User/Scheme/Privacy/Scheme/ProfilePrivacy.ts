import mongoose from 'mongoose'
import { ProfilePrivacyInterface } from './interfaces/ProfilePrivacyInterface'

const ProfilePrivacySchema = new mongoose.Schema<ProfilePrivacyInterface>({
  availableToViewMainInfo: {
    type: String,
    required: true,
    default: 'all',
  },
  availableToSearch: {
    type: String,
    required: true,
    default: 'all',
  },
  availableToViewRealName: {
    type: String,
    required: true,
    default: 'all',
  },
  sendCommentInMyProfileAvailable: {
    type: String,
    required: true,
    default: 'all',
  },
  availableToViewCommentsInMyProfile: {
    type: String,
    required: true,
    default: 'all',
  },
  availableToViewMyFriends: {
    type: String,
    required: true,
    default: 'all',
  },
  availableToViewMyProfileLevel: {
    type: String,
    required: true,
    default: 'all',
  },
  availableToViewMyOnlineStatus: {
    type: String,
    required: true,
    default: 'all',
  },
})

export default ProfilePrivacySchema
