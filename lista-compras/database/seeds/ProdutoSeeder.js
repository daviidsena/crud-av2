'use strict'

/*
|--------------------------------------------------------------------------
| ProdutoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class ProdutoSeeder {
  async run () {
    await Factory.model("App/Models/User").createMany(4)
    await Factory.model("App/Models/Produto").createMany(1000)
    await Factory.model("App/Models/Unidade").createMany(20)
    await Factory.model("App/Models/Categoria").createMany(10)
  }
}

module.exports = ProdutoSeeder
