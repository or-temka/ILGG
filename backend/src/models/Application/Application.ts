import mongoose from 'mongoose'

const ApplicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  aboutApp: {
    type: String,
    required: true,
  },
  isNewApp: {
    type: Boolean,
    required: true,
  },
})

const AppModel = mongoose.model('Application', ApplicationSchema)

export { AppModel }
