import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Bilhete from 'App/Models/Bilhete'
import Rifa from 'App/Models/Rifa'

export default class UsuariosController {
    public async status({  auth , view}: HttpContextContract) {

        const rifas= await Rifa.query()
        .where('rifas.usuario_id', auth.user!!.id)
        

        return view.render('usuario/status',{rifas})
    }
    public async show({  auth , view, params}: HttpContextContract) {

        const bilhetes = await Bilhete.query()
        .where('bilhetes.rifa_id', params.rifa_id).where('bilhetes.usuario_id', auth.user!!.id)

        
        let cont = 0;
        for (const bilhete of bilhetes) {
           cont++;
        }

        return view.render('usuario/show',{bilhetes,cont})
    }
}
