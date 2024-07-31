import config from './knexfile.js'
import Knex from 'knex'

const _knex = Knex(config)
export default _knex
