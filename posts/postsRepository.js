const { DB } = require('../db.js')

class Repository {
  static async getPosts() {
    const [posts] = await DB.query('SELECT * FROM posts')

    return posts
  }

  static async fillPosts(userId, title, body) {
    const [result] = await DB.query(
      `INSERT INTO posts (userId, title, body) VALUES (${userId}, "${title}", "${body}")`,
    )

    return result
  }
}

module.exports = { Repository }
