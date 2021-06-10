 import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class BilhetesController {


    public async store({ request, response, params, auth }: HttpContextContract) {

      
        console.log( params.rifa_id)
    //console.log(colocacao)
    response.redirect().toRoute('home/index')
  }
}
