import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Rifa from 'App/Models/Rifa'

export default class AuthController {
  public async register({ view }: HttpContextContract) {
    return view.render('rifas/register')
  }


  public async list({ response, session }: HttpContextContract) {
    return response.redirect().toRoute('rifas.list')
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
  public async store({ request, response }: HttpContextContract) {
    const data = request.only(['titulo','descricao','data_provavel_sorteio','data_inicio_venda','data_fim_venda','valor_bilhete','usuarioId','tipoId']);
    data.usuarioId=1;
    data.tipoId=1;
    await Rifa.create(data)
    response.redirect().toRoute('root')
  }

} 