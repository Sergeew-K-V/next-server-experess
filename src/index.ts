import express from 'express'
import data from '../db.json'
import dotenv from 'dotenv'
import path from 'path'
import cors from 'cors'
import mongoose from 'mongoose'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 8081

app.use(cors())

const ConnectionToDb = async () => {
  try {
    if (process.env.DATABASE && process.env.DB_NAME !== undefined) {
      const connection = await mongoose.connect(process.env.DATABASE + '/' + process.env.DB_NAME)
      return console.log(`CONNECTION TO ${process.env.DB_NAME} DATABASE - COMPLETED`)
    }
  } catch (error) {
    return console.log('NOT CONNECTION TO DATABASE')
  }
}

function startServer() {
  try {
    app.use('/static', express.static(path.join(__dirname, 'public')))
    ConnectionToDb()
    const DB = mongoose.connection

    app.get('/', (req, res) => {
      res.send('<h1>Server started on vercel</h1>')
    })

    app.get('/menu', (req, res) => {
      res.send(data)
    })

    app.listen(PORT, () => {
      console.log('Server started on PORT: ', PORT)
    })
  } catch (error) {
    return `Server have some errors: ${error}`
  }
}

startServer()

module.exports = app
