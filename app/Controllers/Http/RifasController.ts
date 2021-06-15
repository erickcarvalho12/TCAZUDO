import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Bilhete from 'App/Models/Bilhete'
import Premio from 'App/Models/Premio'
import Rifa from 'App/Models/Rifa'
import Tipo from 'App/Models/Tipo'
import { DateTime } from 'luxon'
//import Usuario from 'App/Models/Usuario'

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

  public async show({ view ,params, request}: HttpContextContract) {
    let page = request.qs().page

    const rifa = await Rifa.find(params.rifa_id)

    const premios = await Premio.query()
    .where('premios.rifa_id', params.rifa_id)

    const bilhetes = await this.loadNextPage(rifa, request, page)
    const bilhetesTamanho =  await Tipo.query()
    .where('tipos.id', rifa!!.tipoId).firstOrFail()

    
    let vencida = true;
    
    
    if(rifa!!.dataFimVenda > DateTime.now()){
       vencida = false;
    }
    //console.log(vencida)
    const max = Math.ceil(bilhetesTamanho.quantidadeBilhetes / 100)

    return view.render('rifas/show',{rifa,premios,bilhetes, page,max,vencida})
  }

 

  private async loadNextPage(rifa, request, page){
   
    return await rifa.related('bilhetes').query().forPage(request.input('page', page), 100)

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
    response.redirect().toRoute('premios.create', { rifa_id: rifa.id })
  }

  public async sortear({  auth ,params ,view}: HttpContextContract) {

    const rifa = await auth
      .user!!.related('rifas')
      .query()
      .where('rifas.id', params.rifa_id)
      .firstOrFail()

      const tipo = await Tipo.find(rifa.tipoId) 

     // console.log('numero maximo:',tipo?.quantidadeBilhetes,' ') 

      const  bilhetes = await Bilhete
      .query()
      .where('bilhetes.rifa_id', rifa.id)

      let rifaSorteada = false

      const  premios = await Premio.query()
      .where('premios.rifa_id', rifa.id)
      let quantidadeDePremios = 0;
      let jaSorteado = 0;
      for (const premio of premios) {
        quantidadeDePremios++
         jaSorteado = premio.bilheteSorteadoId;
      }
      if(!jaSorteado){
        //console.log('contador de premio:',premios )
        let quantidadePremiosSorteados=0
        do {
          const idBilheteSorteado = Math.floor(Math.random() * (tipo!!.quantidadeBilhetes - 1) + 1)
          //console.log('id sorteado:',idBilheteSorteado,' ')
          let cont= 0;
          for (const bilhete of bilhetes) {
            cont++
            if(cont === idBilheteSorteado  ){
              //console.log('numero do bilhete sorteado: ',bilhete.numero)
              //console.log('id do bilhete sorteado: ',bilhete.id)
              if( bilhete.usuarioId  ){
                if(quantidadePremiosSorteados <= quantidadeDePremios){
                  quantidadePremiosSorteados++
                  await Premio.query().where('rifa_id', rifa.id).where('colocacao', quantidadePremiosSorteados).update({ bilhete_sorteado_id: bilhete.id })
                }
                else{
                  rifaSorteada = true
                }        
              }
            }
          }
          //console.log(cont)
        } while(!rifaSorteada)
      }
      const premioss = await rifa
      .related('premios')
      .query()
      .preload('bilheteSorteado', (bilheteQuery) => {
        bilheteQuery.preload('usuario')
      })
    return view.render('rifas/ganhadores', { rifa_id: params.rifa_id, premioss })
  }

} 
