import { DateTime } from 'luxon'
import { BaseModel, column ,hasMany,HasMany, hasOne,
  HasOne,  } from '@ioc:Adonis/Lucid/Orm'
import Rifa from './Rifa'

export default class Tipo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public descricao: string

  @column()
  public numero_inicial: number

  @column()
  public passo: number

  @column()
  public quantidade_bilhetes: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(()=> Rifa)
  public rifas: HasMany<typeof Rifa>

  @hasOne(() => Rifa)
  public rifa: HasOne <typeof Rifa>
}
