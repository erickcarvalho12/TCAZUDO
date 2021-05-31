import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Rifa extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public descricao: string

  @column()
  public data_provavel_sorteio: DateTime

  @column()
  public data_inicio_venda: DateTime

  @column()
  public data_fim_venda: DateTime

  @column()
  public data_sorteio: DateTime

  @column()
  public valor_bilhete: Float32Array

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
