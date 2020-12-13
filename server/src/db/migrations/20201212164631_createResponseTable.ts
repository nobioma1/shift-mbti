import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('responses', (table) => {
    table.increments();
    table.integer('response').notNullable();
    table
      .integer('userId')
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table
      .integer('questionId')
      .unsigned()
      .references('id')
      .inTable('questions')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.timestamp('createdAt').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('responses');
}
