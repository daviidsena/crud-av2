'use strict'

// Flag para Intellisence funcionar com Adonis  https://blog.adonisjs.com/adonis-intellisence/
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User')

class AuthController {
  async register({ request }) {
    const data = request.only(['email', 'password', 'username']);

    console.log(request);

    const user = await User.create(data);
    return user;
  }

  async authenticate() {

  }
}

module.exports = AuthController
