import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('questions', (table) => {
    table.increments();
    table.string('questionText', 225).notNullable();
    table.enum('dimension', ['EI', 'SN', 'TF', 'JP']).notNullable();
    table.integer('direction').notNullable();
    table
      .enum('meaning', ['E', 'I', 'S', 'N', 'T', 'F', 'J', 'P'])
      .notNullable();
    table.timestamp('createdAt').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('questions');
}
