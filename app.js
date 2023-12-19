const express = require('express')
const compression = require('compression')
const cors = require('cors')
const postsRouter = require('./posts/router.js')

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

module.exports = app
