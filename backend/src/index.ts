import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import { DB_LOGIN, DB_PASSWORD } from './PASSWORDS'
import { BASE_API_URL, DB_CLUSTER_NAME, DB_NAME } from './variables'

import { serverFatalError, serverLog } from './utils/serverLog'

import userRoutes from './routes/userRoutes'
import appRoutes from './routes/appRoutes'

mongoose
  .connect(
    `mongodb+srv://${DB_LOGIN}:${DB_PASSWORD}@${DB_CLUSTER_NAME}.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => serverLog('connected to DB'))
  .catch((error) => serverFatalError(`connected error to DB: ${error}`))

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.use(BASE_API_URL, userRoutes)
app.use(BASE_API_URL, appRoutes)

app.listen(PORT, () => {
  serverLog(`Server started at port: ${PORT}`)
})
