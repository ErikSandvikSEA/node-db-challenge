const express = require('express')
const Projects = require('../apiModel')

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

module.exports = router