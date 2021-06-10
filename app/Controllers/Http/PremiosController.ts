import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PremiosController {
  public async create({ view, params, auth }: HttpContextContract) {
    const rifa = await auth
      .user!!.related('rifas')
      .query()
      .where('rifas.id', params.rifa_id)
      .firstOrFail()
    const colocacao =
      ((await rifa.related('premios').query().max('colocacao').first())?.$extras[
        'max(`colocacao`)'
      ] || 0) + 1

    return view.render('premios/create', { rifa_id: params.rifa_id, colocacao })
  }

  public async store({ request, response, params, auth }: HttpContextContract) {

    const rifa = await auth
      .user!!.related('rifas')
      .query()
      .where('rifas.id', params.rifa_id)
      .firstOrFail()

    
    const colocacao =
      ((await rifa.related('premios').query().max('colocacao').first())?.$extras[
        'max(`colocacao`)'
      ] || 0) + 1

    await rifa.related('premios').create({ descricao: request.input('descricao'), colocacao })
    //console.log(colocacao)
    response.redirect().toRoute('/rifas/:rifa_id/premios/create', { rifa_id: params.rifa_id })
  }
}
