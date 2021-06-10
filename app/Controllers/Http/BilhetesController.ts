 import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Rifa from 'App/Models/Rifa'
import Tipo from 'App/Models/Tipo'

export default class BilhetesController {


    public async store({ params,view }: HttpContextContract) {  
    const rifa = await Rifa.find(params.rifa_id)


    const qtdBilhetes = await Tipo.query()
        .where('id', rifa!!.tipoId ).firstOrFail()
    
    for (let a = 0; a < qtdBilhetes.quantidadeBilhetes; a++) {
        
    }
    
    return view.render('home/index')
  }
}
