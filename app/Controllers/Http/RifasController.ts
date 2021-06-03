import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Task from 'App/Models/Rifa'

export default class RifasController {
  public async index({ view }: HttpContextContract) {)
    return view.render('rifa/index', {  })
  }
}
