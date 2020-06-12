
exports.seed = function(knex) {
  return knex('tasks').insert([
    {
      //id: 1,
      description: 'Load up the truck w/junk',
      notes: 'Careful not to scratch up the truck bed',
      project_id: 1,
      project_name: 'Dump Run',
    },
    {
      //id: 2
      description: 'Take the junk and dump it at the dump',
      notes: 'Usually costs about $30',
      project_id: 1,
      project_name: 'Dump Run',
    },
    {
      //id 3
      description: 'Rake leaves into garbage bags',
      notes: 'Be sure to tie the bags when full',
      project_id: 2,
      project_name: 'Rake Leaves',
    },
    {
      //id 4
      description: 'Throw the bags into yard waste bin',
      notes: 'Make sure it not to tip it over!',
      project_id: 2,
      project_name: 'Rake Leaves',
    },
  ])
};
