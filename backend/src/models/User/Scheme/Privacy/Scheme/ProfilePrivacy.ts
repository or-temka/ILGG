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
})

export default ProfilePrivacySchema
