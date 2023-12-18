const express = require('express')
const http = require('https')

const app = express()

const PORT = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log('Listening request on port: ', PORT)
})
