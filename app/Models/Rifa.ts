import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Usuario from './Usuario'
import Tipo from './Tipo'
import Premio from './Premio'
import Bilhete from './Bilhete'

export default class Rifa extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public titulo: string

  @column()
  public descricao: string

  @column.dateTime()
  public dataProvavelSorteio: DateTime

  @column.dateTime()
  public dataInicioVenda: DateTime

  @column.dateTime()
  public dataFimVenda: DateTime

  @column.dateTime()
  public dataSorteio: DateTime

  @column()
  public usuarioId: number

  @column()
  public tipoId: number

  @column()
  public valorBilhete: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Usuario)
  public usuario: BelongsTo<typeof Usuario>

  @belongsTo(() => Tipo)
  public tipo: BelongsTo<typeof Tipo>

  @hasMany(() => Premio)
  public premios: HasMany<typeof Premio>

  @hasMany(() => Bilhete)
  public bilhetes: HasMany<typeof Bilhete>
}
