import { Router } from 'express'
const HomeRouter = Router()

HomeRouter.get('/', (req, res) => {
  res.send('<h1>Server started on vercel</h1>')
})

export default HomeRouter
