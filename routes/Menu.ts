import data from '../db.json'
import { Router } from 'express'
const MenuRouter = Router()

MenuRouter.get('/menu', (req, res) => {
  res.send(data)
})

export default MenuRouter
