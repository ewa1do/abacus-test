const { Router } = require('express')
const postsController = require('./postsController.js')

const router = Router()

router.get('/', postsController.getPosts)

module.exports = router
