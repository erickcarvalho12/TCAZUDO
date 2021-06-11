import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Rifa from 'App/Models/Rifa'
import Tipo from 'App/Models/Tipo'

export default class BilhetesController {
  public async store({ params, view }: HttpContextContract) {
    const rifa = (await Rifa.find(params.rifa_id))!!

    const qtdBilhetes = await Tipo.query().where('id', rifa!!.tipoId).firstOrFail()

    const numeros: { numero: number }[] = []
    for (let a = 0; a < qtdBilhetes.quantidadeBilhetes; a++) {
      numeros.push({ numero: a })
    }

    await rifa.related('bilhetes').createMany( numeros )

    return view.render('home/index')
  }
}
