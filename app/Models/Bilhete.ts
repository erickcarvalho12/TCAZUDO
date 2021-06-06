import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, BelongsTo, hasMany,HasMany} from '@ioc:Adonis/Lucid/Orm'
import Rifa from './Rifa'
import Premio from './Premio'
import Usuario from './Usuario'

export default class Bilhete extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public numero: number

  @column()
  public rifaId: number

  @column()
  public usuarioId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(()=> Rifa)
  public rifa: BelongsTo<typeof Rifa>

  @belongsTo(() => Usuario)
  public usuario: BelongsTo<typeof Usuario>

  @hasMany(()=> Premio)
  public primeios: HasMany<typeof Premio>

  
  
}
