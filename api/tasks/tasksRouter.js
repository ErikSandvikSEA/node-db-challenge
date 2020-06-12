const express = require('express')
const Tasks = require('../apiModel')
const middleware = require('../middleware')

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

//POSTs
router.post(
     '/', 
     middleware.requiredProperty('description'),
     middleware.requiredProperty('project_id'),
     middleware.requiredProperty('project_name'),
     (req, res) => {
          const newTask = req.body
          Tasks.insert('tasks', newTask)
               .then(postedNewTask => {
                    res.status(201).json({
                         message: 'New Task Added',
                         newTask: postedNewTask
                    })
               })
               .catch(err => {
                    console.log(err)
                    res.status(500).json({
                         message: 'Error occurred while posting'
                    })
               })
     }
)

module.exports = router