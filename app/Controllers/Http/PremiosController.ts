import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Premio from 'App/Models/Premio';

export default class PremiosController {

    public async index({ view }: HttpContextContract) {
        const premios = await Premio.all()
        return view.render('premios/index',{premios})
    }

    public async store({ request, response }: HttpContextContract) {
        const data = request.only(['descricao']);
        //await auth.user?.related('rifas').create(data)
        console.log(data)
        //const rifa = Rifa.query().where('id',params.id)
        response.redirect().toRoute('root')
    }
}
