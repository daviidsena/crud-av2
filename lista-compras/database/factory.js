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
Faker.locale = 'pt_BR';

Factory.blueprint('App/Models/User', faker => {
  var item = {
    username: Faker.internet.userName(),
    email: Faker.internet.email(),
    password: Faker.internet.password(8,1)
  }

  console.log(item);

  return item;
})

Factory.blueprint('App/Models/Produto', faker => {
  return {
    user_id: Faker.random.number({min: 1, max: 4}),
    nome: Faker.commerce.productName(),
    quantidade: Faker.random.number({min: 10, max: 200}),
    preco: Faker.commerce.price(.10, 300.00),
    categoria_id: Faker.random.number({min: 10, max: 20}),
    unidade_id: Faker.random.number({min: 10, max: 20})
  }
})

Factory.blueprint('App/Models/Unidade', faker => {
  return {
    nome: Faker.commerce.productName(),
  }
})

Factory.blueprint('App/Models/Categoria', faker => {
  return {
    nome: Faker.commerce.productName(),
  }
})
