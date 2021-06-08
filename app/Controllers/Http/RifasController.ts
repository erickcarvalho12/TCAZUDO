
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Rifa from 'App/Models/Rifa'
import Tipo from 'App/Models/Tipo'

export default class RifasController {
  public async register({ view }: HttpContextContract) {
    const tipos = await Tipo.all()
    return view.render('rifas/register',{tipos})
  }

  public async show({ view}: HttpContextContract) {
    const rifas = await Rifa.all()
    //const rifas = await auth.user?.related('rifas').query()
    return view.render('rifas/show', {rifas})
  }

  public async list({ response, session }: HttpContextContract) {
    return response.redirect().toRoute('rifas.list', {})
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
  public async store({ request, response, auth }: HttpContextContract) {
    const rifa = request.only(['titulo','descricao','data_provavel_sorteio','data_inicio_venda','data_fim_venda','valor_bilhete','tipo_id']);
    await auth.user?.related('rifas').create(rifa)
    //const rifa = Rifa.query().where('id',params.id)
    response.redirect().toRoute('premios.index',{rifa})
  }

} 