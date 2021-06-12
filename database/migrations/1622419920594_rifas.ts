import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Rifas extends BaseSchema {
  protected tableName = 'rifas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary
      table.string('titulo', 45).notNullable()
      table.text('descricao')
      table.dateTime('data_provavel_sorteio').notNullable()
      table.dateTime('data_inicio_venda').notNullable()
      table.dateTime('data_fim_venda').notNullable()
      table.dateTime('data_sorteio')
      table.float('valor_bilhete').notNullable()
      table.integer('usuario_id').unsigned().notNullable().references('id').inTable('usuarios')
      table.integer('tipo_id').unsigned().notNullable().references('id').inTable('tipos')

      
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
