const express = require('express')
const Projects = require('../apiModel')
const middleware = require('../middleware')

const router = express.Router()

//GETs
router.get('/', (req, res) => {
     Projects.find('projects')
     .then(projects => {
          res.json({
               projects,
               message: 'Successfully got'
          })
     })
     .catch(err => {
          res.status(500).json({
               message: 'Failed to retrieve projects'
          })
     })
})

//POSTs
router.post(
     '/', 
     middleware.requiredProperty('name'),
     (req, res) => {
          const newProject = req.body
          Projects.insert('projects', newProject)
               .then(postedNewProjectId => {
                    res.status(201).json({
                         message: 'New Project Added',
                         newProjectId: postedNewProjectId
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