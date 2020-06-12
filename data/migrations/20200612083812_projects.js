
exports.up = function(knex) {
     return knex.schema
     //-------------projects---------------
        .createTable('projects', tbl => {
             tbl.increments()
             tbl.string('name').notNullable().index()
             tbl.string('description').index()
             tbl.boolean('completed?').notNullable().defaultTo(0)
        })
     //--------------resources--------------
        .createTable('resources', tbl => {
             tbl.increments()
             tbl.string('name').unique().notNullable().index()
             tbl.string('description').index()
        })
     //----------------tasks------------------
        .createTable('tasks', tbl => {
          tbl.increments()
          tbl.string('description').notNullable().index()
          tbl.string('notes').index()
          tbl.boolean('completed?').notNullable().defaultTo(0)
          tbl
               .integer('project_id')
               .unsigned()
               .references('projects.id')
               .onDelete('RESTRICT')
               .onUpdate('CASCADE');
          tbl
               .string('project_name')
               .references('projects.name')
               .onDelete('RESTRICT')
               .onUpdate('CASCADE')
        })
     //-----------PROJECT LINE ITEMS-------------
        .createTable('project_line_items', tbl => {
          tbl.increments()
          tbl
               .integer('project_id')
               .unsigned()
               .references('projects.id')
               .onDelete('RESTRICT')
               .onUpdate('CASCADE')
          tbl
               .string('project_name')
               .references('projects.name')
               .onDelete('RESTRICT')
               .onUpdate('CASCADE')
          tbl
               .integer('resource_id')
               .unsigned()
               .references('resources.id')
               .onDelete('RESTRICT')
               .onUpdate('CASCADE')
          tbl
               .string('resource_name')
               .references('resources.name')
               .onDelete('RESTRICT')
               .onUpdate('CASCADE')
        })
   };
   
   exports.down = function(knex) {
     return knex.schema
          .dropTableIfExists('project_line_items')
          .dropTableIfExists('tasks')
          .dropTableIfExists('projects')
          .dropTableIfExists('resources')
   };
   