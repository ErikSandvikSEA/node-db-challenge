exports.seed = function(knex) {
  return knex('project_line_items').insert([
    {
      //id: 1,
      project_id: 1,
      project_name: 'Dump Run',
      resource_id: 1,
      resource_name: 'Garbage Bags'
    },
    {
      //id: 2,
      project_id: 1,
      project_name: 'Dump Run',
      resource_id: 2,
      resource_name: 'Truck'
    },
    {
      //id: 3,
      project_id: 2,
      project_name: 'Rake Leaves',
      resource_id: 1,
      resource_name: 'Garbage Bags'
    },
    {
      //id: 4,
      project_id: 2,
      project_name: 'Rake Leaves',
      resource_id: 3,
      resource_name: 'Rake'
    },
  ])
};
