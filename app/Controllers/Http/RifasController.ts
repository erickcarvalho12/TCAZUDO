import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Rifa from 'App/Models/Rifa'
import Tipo from 'App/Models/Tipo'

export default class RifasController {
  public async register({ view }: HttpContextContract) {
    const tipos = await Tipo.all()
    return view.render('rifas/register', { tipos })
  }

  public async list({ view }: HttpContextContract) {
    const rifas = await Rifa.all()
    //const rifas = await auth.user?.related('rifas').query()
    return view.render('rifas/list', { rifas })
  }

  public async show({ view ,params}: HttpContextContract) {
    const rifa = await Rifa.find(params.rifa_id)

    return view.render('rifas/show',{rifa})
  }


  public async store({ request, response, auth }: HttpContextContract) {
    const data = request.only([
      'titulo',
      'descricao',
      'data_provavel_sorteio',
      'data_inicio_venda',
      'data_fim_venda',
      'valor_bilhete',
      'tipo_id',
    ])
    const rifa = await auth.user!!.related('rifas').create(data)
    //const rifa = Rifa.query().where('id',params.id)
    response.redirect().toRoute('premios.create', { rifa_id: rifa.id })
  }
}
