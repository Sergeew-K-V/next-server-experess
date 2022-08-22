import express from 'express'
import data from './db.json'

const app = express()
const PORT = 8080

function startServer() {
  try {
    app.get('/', (req, res) => {
      res.send('<h1>Server started on vercel</h1>')
    })
    app.get('/products', (req, res) => {
      res.send(data)
    })

    app.listen(PORT, () => {
      console.log('Server started on PORT: ', PORT)
    })
  } catch (error) {
    alert(`Error ${error}`)
  }
}

startServer()

module.exports = app
