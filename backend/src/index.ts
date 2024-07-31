import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import path from 'path'

import { DB_LOGIN, DB_PASSWORD } from './PASSWORDS'
import {
  BASE_API_URL,
  DB_CLUSTER_NAME,
  DB_NAME,
  SITE_FULL_URL,
} from './variables'
import { serverFatalError, serverLog } from './utils'
import routes from './routes/routes'

mongoose
  .connect(
    `mongodb+srv://${DB_LOGIN}:${DB_PASSWORD}@${DB_CLUSTER_NAME}.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => serverLog('connected to DB'))
  .catch((error) => serverFatalError(`connected error to DB: ${error}`))

const app = express()
const PORT = process.env.PORT || 4000

app.use('/uploads', express.static(path.join(__dirname, '../uploads')))
app.use(express.json())
app.use(cookieParser())
app.use(
  cors({
    credentials: true,
    origin: SITE_FULL_URL,
  })
)

app.use(BASE_API_URL, routes)

app.listen(PORT, () => {
  serverLog(`Server started at port: ${PORT}`)
})
