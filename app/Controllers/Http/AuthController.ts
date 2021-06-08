import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Usuario from 'App/Models/Usuario'


export default class AuthController {
  public async register({ view }: HttpContextContract) {
    return view.render('auth/register')
  }

  public async store({ request, response, auth, session }: HttpContextContract) {
    const data = request.only(['nome','email','password','foto','admin'])
    if(!data.admin){
      data.admin = false
    }
    try {
      data.foto= 1;
      const user = await Usuario.create(data)
      await auth.login(user,true)
      
    } catch (error) {
      console.log(error);
      
      session.flash('errors', 'Erro no registro. Verifique suas informações.')
      return response.redirect().toRoute('auth.register')
      
    }
    response.redirect().toRoute('root')
  }

  public async login({ view }: HttpContextContract) {
    return view.render('auth/login')
  }

  public async verify({ request, response, auth }: HttpContextContract) {
    const data = request.only(['email','password','remember'])
    if(!data.remember) data.remember = false 
    await auth.attempt(data.email, data.password,data.remember )
    response.redirect().toRoute('root')
  }

  public async logout({ response, auth }: HttpContextContract) {
    await auth.logout()
    response.redirect().toRoute('root')
  }

  public async about({ view}: HttpContextContract) {
    return view.render('about/about')
  }
}
