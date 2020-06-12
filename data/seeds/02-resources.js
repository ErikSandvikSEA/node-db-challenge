
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').insert([
    {
      //id: 1
      name: 'Garbage Bags',
      description: 'Hefty yard waste bags',
    },
    {
      //id: 2
      name: 'Truck',
      description: 'Old pickup truck - still gets the job done'
    },
    {
      //id: 3
      name: 'Rake',
      description:'Used to rake the leaves'
    }
  ])
};
