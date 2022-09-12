import express from 'express'
import data from './db.json'
import dotenv from 'dotenv'
import path from 'path'
import cors from 'cors'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 8081

app.use(cors())

function startServer() {
  try {
    app.get('/', (req, res) => {
      res.send('<h1>Server started on vercel</h1>')
    })
    app.get('/menu', (req, res) => {
      res.send(data)
    })

    app.use('/static', express.static(path.join(__dirname, 'public')))

    app.listen(PORT, () => {
      console.log('Server started on PORT: ', PORT)
    })
  } catch (error) {
    return `Server have some errors: ${error}`
  }
}

startServer()

module.exports = app
