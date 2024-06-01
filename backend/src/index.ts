import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'

import { DB_LOGIN, DB_PASSWORD } from './PASSWORDS'
import { DB_CLUSTER_NAME, DB_NAME } from './variables'

import { serverError, serverLog } from './utils/serverLog'

mongoose
  .connect(
    `mongodb+srv://${DB_LOGIN}:${DB_PASSWORD}@${DB_CLUSTER_NAME}.rouuumh.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => serverLog('connected to DB'))
  .catch((error) => serverError(`connected error to DB: ${error}`))

const app = express()
const PORT = 4000

app.use(express.json())
app.use(cors())

app.listen(PORT, () => {
  serverLog(`Server started at port: ${PORT}`)
})
