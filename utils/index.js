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

module.exports = { fetchJSONData, resStatus }
