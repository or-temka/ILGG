import mongoose from 'mongoose'
import { MessagesPrivacyInterface } from './interfaces/MessagesPrivacyInterface'

const MessagesPrivacySchema = new mongoose.Schema<MessagesPrivacyInterface>({
  sendingAvailable: {
    type: String,
    required: true,
    default: 'all',
  },
})

export default MessagesPrivacySchema
