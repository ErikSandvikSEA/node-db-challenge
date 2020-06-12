const db = require('../data/db-config.js')

function find(tableName){
     return db(tableName)
}

function insert(tableName, newEntity) {
     return db(tableName)
       .insert(newEntity)
   }

module.exports = {
     find,
     insert
}