import express, {Request, Response, NextFunction, Express} from 'express'
import morgan from 'morgan'
import creatHttpError from 'http-errors'
import api from './routes/api.route'

const createdBy = '-- 2022.Feb.09 EJS x TS'
const app: Express = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))

app.get('/check', (req: Request, res: Response, next: NextFunction) => {
  res.send(`All OK! ${createdBy}`)
})

app.use('/api', api)

// Error Handling
app.use((req: Request, res: Response, next: NextFunction) => {
  next(new creatHttpError.NotFound())
})

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status = err.status || 500
  res.send({
    status: res.status,
    message: err.message
  })
})

const PORT: Number = Number(process.env.PORT||3000)
app.listen(PORT, () => {
  console.log(`Game! ${createdBy}`)
})