const db = require('../data/db-config.js')

function find(tableName){
     return db(tableName)
}

module.exports = {
     find
}