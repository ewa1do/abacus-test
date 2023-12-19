const { Router } = require('express')
const postsController = require('./postsController.js')

const router = Router()

router.get('/', postsController.getPosts)
router.get('/export', postsController.exportPosts)

module.exports = router
