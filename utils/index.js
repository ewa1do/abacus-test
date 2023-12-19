const fs = require('fs/promises')
const path = require('path')

const fetchJSONData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', { method: 'GET' })
  const posts = await response.json()

  return posts
}

const resStatus = {
  SUCCESS: 'success',
  ERROR: 'error',
  FAIL: 'fail',
}

const generateCSV = async (posts) => {
  let csvDataStr = `id, userId, title, body\n`

  posts.forEach(({ id, userId, title, body }) => {
    csvDataStr += `${id}, ${userId}, ${title}, ${body}\n`
  })

  const rootPath = path.join(__dirname, '..')

  const projectRoot = (await fs.readdir(rootPath, 'utf-8')) || null

  if (!projectRoot.includes('downloads')) {
    await fs.mkdir(rootPath + '/downloads/', { recursive: true })
  }

  await fs.writeFile(`${rootPath}/downloads/CSV-generated-${Date.now()}.csv`, csvDataStr, 'utf-8')

  return true
}

module.exports = { fetchJSONData, resStatus, generateCSV }
