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
      nome: 'tca', 
      email:'tca@tca.com', 
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

    await rifa.related('bilhetes').createMany([
      { usuarioId: 1, numero: 1 },
      { usuarioId: 1, numero: 2 },
      { usuarioId: 1, numero: 3 },
      { numero: 4 },
      { numero: 5 },
      { numero: 6 },
      { numero: 7 },
      { numero: 8 },
      { numero: 9 },
      { numero: 10 },
      { numero: 11 },
      { usuarioId: 1, numero: 12 },
    ])

    const rifa2 =  await tipo.related('rifas').create({
      usuarioId: 0, 
      titulo: 'CB TWISTER 2020 - Special Edition',
      descricao: 'Sorteio de uma CB TWISTER - Special edition, moto semi-nova porém super conservada, IMPERDÍVEL!!!!!',
      dataProvavelSorteio: DateTime.now(),
      dataInicioVenda: DateTime.now(),
      dataFimVenda: DateTime.now(),
      valorBilhete:  10,
      
    })

    const premio2 = await rifa2.related('premios').create({
      descricao: 'CB TWISTER - Special edition',
      colocacao: 1,
    }) 

    await rifa2.related('bilhetes').createMany([
      { usuarioId: 1, numero: 1 },
      { usuarioId: 1, numero: 2 },
      { numero: 3 },
      { numero: 4 },
      { usuarioId: 1, numero: 5 },
      { numero: 6 },
      { numero: 7 },
      { numero: 8 },
      { numero: 9 },
      { numero: 10 },
      { numero: 11 },
      { numero: 12 },
    ])

    const rifa3 =  await tipo.related('rifas').create({
      usuarioId: 0, 
      titulo: 'PC Gamer',
      descricao: 'Sorteio de um computador gamer INTEL Core duos, intel HD graphics, 4GB ram ddr2, marca Positivo',
      dataProvavelSorteio: DateTime.now(),
      dataInicioVenda: DateTime.now(),
      dataFimVenda: DateTime.now(),
      valorBilhete:  5,
      
    })

    const premio3 = await rifa3.related('premios').create({
      descricao: 'PC Gamer',
      colocacao: 1,
    }) 

    await rifa3.related('bilhetes').createMany([
      { usuarioId: 1, numero: 1 },
      { usuarioId: 1, numero: 2 },
      { usuarioId: 1, numero: 3 },
      { numero: 4 },
      { usuarioId: 1,numero: 5 },
      { numero: 6 },
      { numero: 7 },
      { usuarioId: 1,numero: 8 },
      { numero: 9 },
      { numero: 10 },
      { numero: 11 },
      { usuarioId: 1, numero: 12 },
    ])

    const rifa4=  await tipo.related('rifas').create({
      usuarioId: 0, 
      titulo: 'CD Elias Silva Coletânea de Sucessos',
      descricao: 'Sorteio de um CD mp3 do cantos Elias Silva, renomado cantor gospel',
      dataProvavelSorteio: DateTime.now(),
      dataInicioVenda: DateTime.now(),
      dataFimVenda: DateTime.now(),
      valorBilhete:  1,
      
    })

    const premio4 = await rifa4.related('premios').create({
      descricao: 'CD Elias Silva Coletânea de Sucessos',
      colocacao: 1,
    }) 

    await rifa4.related('bilhetes').createMany([
      { usuarioId: 1, numero: 1 },
      { usuarioId: 1, numero: 2 },
      { usuarioId: 1, numero: 3 },
      { numero: 4 },
      { numero: 5 },
      { numero: 6 },
      { numero: 7 },
      { numero: 8 },
      { numero: 9 },
      { numero: 10 },
      { numero: 11 },
      { usuarioId: 1, numero: 12 },
    ])

    const rifa5 =  await tipo.related('rifas').create({
      usuarioId: 0, 
      titulo: 'Camisa autografada Gianluigi Buffon',
      descricao: 'Camisa de goleiro da Juventus, autografada por um dos maiores arqueiros de todos os tempos',
      dataProvavelSorteio: DateTime.now(),
      dataInicioVenda: DateTime.now(),
      dataFimVenda: DateTime.now(),
      valorBilhete:  2,
      
    })

    const premio5 = await rifa5.related('premios').create({
      descricao: 'CAMISA BUFFON AUTOGRAFADA',
      colocacao: 1,
    }) 

    await rifa5.related('bilhetes').createMany([
      { usuarioId: 1, numero: 1 },
      { usuarioId: 1, numero: 2 },
      { usuarioId: 1, numero: 3 },
      { usuarioId: 1,numero: 4 },
      { usuarioId: 1,numero: 5 },
      { numero: 6 },
      { usuarioId: 1,numero: 7 },
      { numero: 8 },
      { numero: 9 },
      { numero: 10 },
      { numero: 11 },
      { usuarioId: 1, numero: 12 },
    ])

    const rifa6 =  await tipo.related('rifas').create({
      usuarioId: 0, 
      titulo: 'Triumph Tiger 800',
      descricao: 'Sorteio de uma Triumph Tiger 800, moto zero quilômetro perfeitinha, oportunidade unica',
      dataProvavelSorteio: DateTime.now(),
      dataInicioVenda: DateTime.now(),
      dataFimVenda: DateTime.now(),
      valorBilhete:  30,
      
    })

    const premio6 = await rifa6.related('premios').create({
      descricao: 'Triumph Tiger 800',
      colocacao: 1,
    }) 

    await rifa6.related('bilhetes').createMany([
      { usuarioId: 1, numero: 1 },
      { numero: 2 },
      { numero: 3 },
      { numero: 4 },
      { numero: 5 },
      { numero: 6 },
      { numero: 7 },
      { numero: 8 },
      { numero: 9 },
      { numero: 10 },
      { numero: 11 },
      { numero: 12 },
    ])

    

  }
}
