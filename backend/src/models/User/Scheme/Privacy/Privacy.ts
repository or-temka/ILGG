import mongoose from 'mongoose'

import GamesPrivacySchema from './Scheme/GamesPrivacy'
import InventoryPrivacySchema from './Scheme/InventoryPrivacy'
import MessagesPrivacySchema from './Scheme/MessagesPrivacy'
import ProfilePrivacySchema from './Scheme/ProfilePrivacy'

const PrivacySchema = new mongoose.Schema({
  games: {
    type: GamesPrivacySchema,
    required: true,
    default: () => ({}),
  },
  inventory: {
    type: InventoryPrivacySchema,
    required: true,
    default: () => ({}),
  },
  messages: {
    type: MessagesPrivacySchema,
    required: true,
    default: () => ({}),
  },
  profile: {
    type: ProfilePrivacySchema,
    required: true,
    default: () => ({}),
  },
})

export default PrivacySchema
