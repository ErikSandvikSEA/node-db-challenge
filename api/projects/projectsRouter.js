const express = require('express')
const Projects = require('./projectsModel')

const router = express.Router()

//GETs
router.get('/', (req, res) => {
     Projects.getProjects()
     .then(projects => {
          res.json({
               projects,
               message: 'Successfully got'
          })
     })
     .catch(err => {
          res.status(500).json({
               message: 'Failed to retrieve recipes'
          })
     })
})

module.exports = router