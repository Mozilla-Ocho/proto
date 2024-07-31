const { pgvector } = require('pgvector/knex')

const config = {
  client: 'pg',
  connection: process.env.DATABASE_URL,
  ...pgvector,
}

module.exports = config
