const express = require('express')
const Tasks = require('../apiModel')

const router = express.Router()

//GETs
router.get('/', (req, res) => {
     Tasks.find('tasks')
     .then(tasks => {
          res.json({
               tasks,
               message: 'Successfully got'
          })
     })
     .catch(err => {
          res.status(500).json({
               message: 'Failed to retrieve tasks'
          })
     })
})

module.exports = router