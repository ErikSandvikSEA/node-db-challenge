const db = require('../data/db-config.js')

function find(tableName){
     return db(tableName)
}

function findById(tableName, id) {
     return db(tableName)
       .where({ id })
       .first();
   }

function insert(tableName, newEntity) {
     return db(tableName)
       .insert(newEntity)
       .then(([id]) => findById(tableName, id))
   }

module.exports = {
     find,
     insert,
     findById
}