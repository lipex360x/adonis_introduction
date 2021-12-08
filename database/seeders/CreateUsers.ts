import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class CreateUsers extends BaseSeeder {
  // public static developmentOnly = true

  public async run() {
    await User.createMany([
      {
        name: 'admin',
        email: 'admin@mail.com',
        password: 'secret',
        role: 'admin'
      },

      {
        name: 'normal',
        email: 'normal@mail.com',
        password: 'secret'
      }
    ])
  }
}
