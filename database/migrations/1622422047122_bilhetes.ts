import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Bilhetes extends BaseSchema {
  protected tableName = 'bilhetes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary
      table.integer('numero').notNullable()
      table.integer('rifa_id').unsigned().notNullable().references('id').inTable('rifas')
      table.integer('usuario_id').unsigned().references('id').inTable('rifas')


      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
