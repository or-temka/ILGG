import mongoose from 'mongoose'

const GamesPrivacySchema = new mongoose.Schema({
  onlyAvailableToMe: {
    type: Boolean,
    required: true,
    default: false,
  },
})

export default GamesPrivacySchema
