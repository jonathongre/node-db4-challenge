exports.seed = function(knex) {
  return knex('ingredients').insert([
    {ingredient: 'Kool-Aid packet', quantity: '1', recipe_id: 1},
    {ingredient: 'water', quantity: '2 quarts', recipe_id: 1},
    {ingredient: 'sugar', quantity: '1 cup', recipe_id: 1},
    {ingredient: 'microwave popcorn bag', quantity: '1', recipe_id: 2},
    {ingredient: 'bread', quantity: '2 slices', recipe_id: 3},
    {ingredient: 'peanut butter', quantity: '1 tsp', recipe_id: 3},
    {ingredient: 'grape jelly', quantity: '1 tsp', recipe_id: 3}
  ]);
};
