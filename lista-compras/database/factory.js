'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Faker = require('faker')

// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })

Factory.blueprint('App/Models/Produto', faker => {
  return {
    user_id: Faker.random.arrayElement([1,3]),
    nome: Faker.commerce.productName(),
    quantidade: Faker.random.number({min: 10, max: 200}),
    preco: Faker.commerce.price(.10, 300.00),
  }
})
