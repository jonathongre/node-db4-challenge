exports.seed = function(knex) {
  return knex('recipes').insert([
    {recipe_name: 'Kool-Aid'},
    {recipe_name: 'Popcorn'},
    {recipe_name: 'Peanut Butter and Jelly Sandwich'}
  ]);
};
