exports.up = function (knex) {
  return knex.schema.createTable('users', function (table) {
    table.string('id').primary()
    table.string('given_name').notNullable()
    table.string('nickname').notNullable()
    table.string('name').notNullable()
    table.string('picture').notNullable()
    table.timestamp('updated_at').notNullable()
    table.string('email').notNullable().unique()
    table.boolean('email_verified').notNullable()
    table.string('sid').notNullable()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
