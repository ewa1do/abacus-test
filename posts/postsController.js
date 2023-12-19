const { fetchJSONData, resStatus, generateCSV } = require('../utils/index.js')
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

const exportPosts = async (req, res) => {
  const posts = await Repository.getPosts()

  if (!posts.length) {
    return res.status(400).json({
      status: resStatus.ERROR,
      message: 'There is no data in the DB, please fill it first',
    })
  }

  await generateCSV(posts)

  res.status(201).json({
    status: resStatus.SUCCESS,
    data: {
      message: 'CSV File Successfully Created!',
    },
  })
}

module.exports = {
  getPosts,
  exportPosts,
}
