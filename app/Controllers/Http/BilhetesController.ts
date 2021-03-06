import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Rifa from 'App/Models/Rifa'
import Tipo from 'App/Models/Tipo'
import Bilhete from 'App/Models/Bilhete'

export default class BilhetesController {    

  public async store({ params, view }: HttpContextContract) {
    const rifa = (await Rifa.find(params.rifa_id))!!

    const qtdBilhetes = await Tipo.query().where('id', rifa!!.tipoId).firstOrFail()

    const numeros: { numero: number }[] = []
    const inicial = qtdBilhetes.numeroInicial
   
    for (let a = 0, numero = inicial ; a < qtdBilhetes.quantidadeBilhetes; a++) {

      if(a !== 0){
        numero= qtdBilhetes.passo+numero;
      }
   
      
      numeros.push({ numero: numero })
    }

    
    await rifa.related('bilhetes').createMany( numeros )

    return view.render('home/index')
  }

  public async edit({ params ,auth, response}: HttpContextContract) {
    const bilhete = await Bilhete.find(params.bilhete_id)
    
    await Bilhete.query().where('id', params.bilhete_id).update({ usuario_id: auth.user?.id })
    
    
    response.redirect().toRoute('rifas.show', { rifa_id: bilhete!!.rifaId , qs: { page:1 }})  
    
  }
}
