const { fetchJSONData, resStatus } = require('../utils/index.js')
const { Repository } = require('./postsRepository.js')

const getPosts = async (req, res, next) => {
  let posts = await Repository.getPosts()

  if (!posts.length) {
    const postsData = await fetchJSONData()

    for (const post of postsData) {
      const { title, body, userId } = post
      await Repository.fillPosts(userId, title, body)
    }

    posts = await Repository.getPosts()
  }

  res.status(200).json({
    status: resStatus.SUCCESS,
    data: {
      posts,
    },
  })
}

module.exports = {
  getPosts,
}
