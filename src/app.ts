import express from 'express'

const createdBy = '-- 2022.Feb.09 EJS x'
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/check', (req, res, next) => {
  res.send(`All OK! ${createdBy}`)
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Game! ${createdBy}`)
})