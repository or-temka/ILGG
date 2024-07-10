import mongoose from 'mongoose'

const ProfilePrivacySchema = new mongoose.Schema({
  mainInfoOnlyFriends: {
    type: Boolean,
    required: true,
    default: false,
  },
})

export default ProfilePrivacySchema
