import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'


export default class AuthController {
  public async register({ view }: HttpContextContract) {
    return view.render('rifas/register')
  }

  public async list({ response, session }: HttpContextContract) {
    //const data = request.only(['nome','email','password','foto','admin'])
    
    try {
      //data.admin=false;
      //data.foto= 1;
      //const user = await Usuario.create(data)
      //await auth.login(user,true)
      
    } catch (error) {
      console.log(error);
      
      session.flash('errors', 'Erro no registro. Verifique suas informações.')
      //return response.redirect().toRoute('auth.register')
      
    }
    response.redirect().toRoute('root')
  }
} 