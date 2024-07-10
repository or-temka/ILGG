import mongoose from 'mongoose'

const InventoryPrivacySchema = new mongoose.Schema({
  onlyAvailableToMe: {
    type: Boolean,
    required: true,
    default: false,
  },
  onlyAvailableToMeAndFriends: {
    type: Boolean,
    required: true,
    default: false,
  },
})

export default InventoryPrivacySchema
