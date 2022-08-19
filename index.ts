import express from 'express'
import data from './db.json'

const app = express()
const PORT = 8080

function startServer() {
  app.listen(PORT, () => {
    console.log('Server started on PORT: ', PORT)
  })
  app.get('/', (req, res) => {
    res.send(data)
  })
}

startServer()
