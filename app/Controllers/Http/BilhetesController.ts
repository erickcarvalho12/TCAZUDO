 import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class BilhetesController {


    public async store({ request, response, params, auth,view }: HttpContextContract) {

      
    console.log('( ' ,params.rifa_id,') ' )
    return view.render('home/index')
  }
}
