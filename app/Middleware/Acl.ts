import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Acl {
  public async handle(
    { auth, response }: HttpContextContract,
    next: () => Promise<void>,
    allowwedRoles: string[]
  ) {
    const user = await auth.authenticate()
    const userAllowed = allowwedRoles.includes(user.role)

    if (!userAllowed) return response.unauthorized({ error: { message: 'access denied' } })
    await next()
  }
}
