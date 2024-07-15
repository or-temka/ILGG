import mongoose from 'mongoose'
import { MessagesPrivacyInterface } from './interfaces/MessagesPrivacyInterface'

const MessagesPrivacySchema = new mongoose.Schema<MessagesPrivacyInterface>({
  sendingAvailable: {
    type: String,
    required: true,
    default: 'all',
  },
  presentSendingAvailable: {
    type: String,
    required: true,
    default: 'all',
  },
  inviteAppAvailable: {
    type: String,
    required: true,
    default: 'friends',
  },
})

export default MessagesPrivacySchema
