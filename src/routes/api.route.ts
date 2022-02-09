import { Router } from 'express'

const api: Router = Router()

api.get('/', (req, res, next) => {
  res.send('Hi from API.')
})

export default api
