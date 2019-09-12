
exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', tbl => {
    tbl.increments();
    tbl.string('recipe_name', 128)
        .notNullable()
        .unique()
  })
  .createTable('ingredients', tbl => {
    tbl.increments();
    tbl.string('ingredient')
        .notNullable()
    tbl.string('quantity')
        .notNullable()
    tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    
  })
  .createTable('instructions', tbl => {
    tbl.increments();
    tbl.string('instructions')
        .notNullable()
    tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')


  })
};

exports.down = function(knex) {
  return knex.schema
        .dropTableIfExists('instructions')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
};
