'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProdutoSchema extends Schema {
  up () {
    this.create('produtos', (table) => {
      table.increments()
      table
          .integer('user_id')
          .unsigned()
          .references('id')
          .inTable('users')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
      table.string('nome').notNullable()
      table.decimal('quantidade').notNullable()
      table.string('preco').notNullable()
      /**
       * Nome,
       * Quantidade,
       * preco,
       * id-unidade,
       * id-categoria
       */
      table.timestamps()
    })
  }

  down () {
    this.drop('produtos')
  }
}

module.exports = ProdutoSchema
