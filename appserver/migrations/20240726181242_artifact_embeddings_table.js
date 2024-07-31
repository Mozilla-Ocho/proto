const { pgvector } = require('pgvector/knex')

exports.up = async function (knex) {
  const resp = await knex.schema.enableExtension('vector')
  return knex.schema.createTable('artifact_embeddings', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'))
    table.specificType('embedding', 'vector(1536)')
    table.string('name')
    table.timestamps(true, true)
  })
}

exports.down = async function (knex) {
  return knex.schema.dropTable('artifact_embeddings')
}
