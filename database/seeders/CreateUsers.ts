import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class CreateUsers extends BaseSeeder {
  // public static developmentOnly = true

  public async run() {
    await User.createMany([
      {
        email: 'admin@mail.com',
        password: 'secret',
        role: 'admin'
      },

      {
        email: 'normal@mail.com',
        password: 'secret'
      }
    ])
  }
}
