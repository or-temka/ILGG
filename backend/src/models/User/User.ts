import mongoose from 'mongoose'

import PrivacySchema from './Scheme/Privacy/Privacy'
import AvatarSchema from './Scheme/Avatar/Avatar'
import LevelSchema from './Scheme/Level/Level'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  login: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  isOnline: {
    type: Boolean,
    required: false,
  },
  balance: {
    type: Number,
    required: true,
  },

  about: String,

  avatar: {
    type: AvatarSchema,
    default: null,
  },

  privacy: {
    type: PrivacySchema,
    required: true,
    default: () => ({}),
  },

  level: {
    type: LevelSchema,
    required: true,
    default: () => ({}),
  },
})

const UserModel = mongoose.model('User', UserSchema)

export { UserModel }
