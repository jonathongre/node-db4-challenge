exports.seed = function(knex) {
  return knex('instructions').insert([
    {instructions: 'Open packet and pour into 2 quart pitcher', recipe_id: 1},
    {instructions: 'Add 1 cup of sugar to pitcher', recipe_id: 1},
    {instructions: 'Fill pitcher with water', recipe_id: 1},
    {instructions: 'Stir until sugar is disolved', recipe_id: 1},
    {instructions: 'Place bag into microwave', recipe_id: 2},
    {instructions: 'Push the popcorn button on microwave', recipe_id: 2},
    {instructions: 'When microwave beeps, Remove bag and shake', recipe_id: 2},
    {instructions: 'Spread peanut butter on one slice of bread', recipe_id: 3},
    {instructions: 'Spread jelly on another slice of bread', recipe_id: 3},
    {instructions: 'Put both slices together', recipe_id: 3},
    {instructions: 'Cut off crust', recipe_id: 3},
  ]);
};