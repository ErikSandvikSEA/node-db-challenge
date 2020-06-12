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

router.get('/:id', validateProjectId, (req, res) => {
     const project = req.project
     res.status(200).json(project)
   });

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
                         newProject: postedNewProjectId
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


//middleware
function validateProjectId(req, res, next) {
     Projects.findById('projects', req.params.id)
       .then(project => {
         if(project) {
           req.project = project
           next()
         } else {
           res.status(404).json({ message: 'Post not found, sry' })
         }
       })
       .catch(err => {
         console.log(error)
         res.status(500).json({
           message: 'Error retrieving the user'
         })
       })
 }

module.exports = router