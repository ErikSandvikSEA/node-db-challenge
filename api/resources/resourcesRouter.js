const express = require('express')
const Resources = require('../apiModel')

const router = express.Router()

//GETs
router.get('/', (req, res) => {
     Resources.find('resources')
     .then(resources => {
          res.json({
               resources,
               message: 'Successfully got'
          })
     })
     .catch(err => {
          res.status(500).json({
               message: 'Failed to retrieve resources'
          })
     })
})

module.exports = router