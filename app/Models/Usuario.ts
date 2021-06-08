import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel,hasMany,HasMany } from '@ioc:Adonis/Lucid/Orm'
import Rifa from './Rifa'
import Bilhete from './Bilhete'

export default class Usuario extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public foto: string

  @column()
  public rememberMeToken?: string

  @column()
  public admin: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(()=> Rifa)
  public rifas: HasMany<typeof Rifa>

  @hasMany(()=> Bilhete)
  public bilhetes: HasMany<typeof Bilhete>


  @beforeSave()
  public static async hashPassword(usuario: Usuario) {
    if (usuario.$dirty.password) {
      usuario.password = await Hash.make(usuario.password)
    }
  }
}
