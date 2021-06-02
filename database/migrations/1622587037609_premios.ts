import BaseSchema from '@ioc:Adonis/Lucid/Schema'


export default class Premios extends BaseSchema {
  protected tableName = 'premios'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary
      table.string('descricao',45).notNullable()
      table.integer('colocacao').notNullable()
      table.integer('rifa_id').unsigned().notNullable().references('id').inTable('rifas')

      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
