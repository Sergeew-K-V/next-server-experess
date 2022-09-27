import express from 'express'
import data from '../db.json'
import dotenv from 'dotenv'
import path from 'path'
import cors from 'cors'
import mongoose from 'mongoose'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 8081

async function ConnectionToCluster() {
  try {
    if (process.env.CLUSTER_HTTP && process.env.USERNAME && process.env.PASSWORD && process.env.CLUSTER !== undefined) {
      await mongoose.connect(process.env.CLUSTER_HTTP + process.env.USERNAME + ':' + process.env.PASSWORD + process.env.CLUSTER)
      // await mongoose.connect(process.env.CLUSTER_HTTP + process.env.USERNAME + ':' + process.env.PASSWORD + process.env.CLUSTER + '/' + process.env.DB_NAME_CLUSTER)
      let db = mongoose.connection
      console.log(`CONNECTION TO CLUSTER - COMPLETED`)
      return db
    }
  } catch (error) {
    console.log('NOT CONNECTION TO DATABASE', error)
    return ''
  }
}

app.use(cors())
//sample_weatherdata

function startServer() {
  try {
    app.use('/static', express.static(path.join(__dirname, 'public')))

    const DB = ConnectionToCluster()

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
