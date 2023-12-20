const express = require('express')
const compression = require('compression')
const cors = require('cors')
const postsRouter = require('./posts/router.js')
const { resStatus } = require('./utils/index.js')

const app = express()

app.use(compression())
app.use(express.json())

app.use('/api/v1/posts', postsRouter)

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST'],
  }),
)

app.get('*', (req, res) => {
  res.status(404).json({
    status: resStatus.FAIL,
    message: `The route ${req.originalUrl} does not exists`,
  })
})

module.exports = app
