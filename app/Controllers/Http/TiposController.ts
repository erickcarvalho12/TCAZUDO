import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Tipo from 'App/Models/Tipo'

export default class TiposController {
  public async register({ view }: HttpContextContract) {
    return view.render('tipos/register')
  }

  public async store({ request, response }: HttpContextContract) {
    const data = request.only(['descricao','numero_inicial','passo','quantidade_bilhetes']);
    await Tipo.create(data)
    response.redirect().toRoute('root')
  }
}
