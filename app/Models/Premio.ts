import { DateTime } from 'luxon'
import { BaseModel, column , BelongsTo, belongsTo } from '@ioc:Adonis/Lucid/Orm'
import Rifa from './Rifa'
import Bilhete from './Bilhete'

export default class Premio extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public descricao: string

  @column()
  public colocacao: number

  @column()
  public rifaId: number

  @column()
  public bilheteSorteadoId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(()=> Rifa)
  public rifa: BelongsTo<typeof Rifa>

  @belongsTo(()=> Bilhete, {
    foreignKey: 'bilheteSorteadoId',
  })
  public bilheteSorteado: BelongsTo<typeof Bilhete>
}
