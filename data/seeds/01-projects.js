
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').insert([
    {
      //id: 1
      name: 'Dump Run',
      description: 'We have a lot of stuff in the garage that needs to be thrown out',
    },
    {
      //id: 2
      name: 'Rake Leaves',
      description: 'The lawn is looking HORRIBLE! We need those leaves raked!'
    }
  ])
};
