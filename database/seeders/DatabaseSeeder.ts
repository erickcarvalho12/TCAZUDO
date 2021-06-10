import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Tipo from 'App/Models/Tipo'
import Usuario   from 'App/Models/Usuario'
import { DateTime } from 'luxon'

export default class DatabaseSeederSeeder extends BaseSeeder {
  public async run () {
    const tipo = await Tipo.create({
      descricao: 'Veículos', 
      numeroInicial: 1, 
      passo: 1, 
      quantidadeBilhetes: 1000 })
    const user = await Usuario.create({
      nome: 'Default', 
      email:'default@csa.com', 
      password: 'teste', 
      admin: true})
    
    
    const rifa =  await tipo.related('rifas').create({
      usuarioId: 0, 
      titulo: 'GOL QUADRADO GTI',
      descricao: 'Sorteio de um Gol GTI ano 95, carro completo e sem detalhes',
      dataProvavelSorteio: DateTime.now(),
      dataInicioVenda: DateTime.now(),
      dataFimVenda: DateTime.now(),
      valorBilhete:  15,
      
    })

    const premio = await rifa.related('premios').create({
      descricao: 'GOL GTI 95',
      colocacao: 1,
    }) 


  }
}
