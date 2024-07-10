import mongoose from 'mongoose'

const MessagesPrivacySchema = new mongoose.Schema({
  onlyFriendMessages: {
    type: Boolean,
    required: true,
    default: false,
  },
})

export default MessagesPrivacySchema
