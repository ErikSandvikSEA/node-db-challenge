const express = require('express')
const Resources = require('../apiModel')
const middleware = require('../middleware')

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

//POSTs
router.post(
     '/', 
     middleware.requiredProperty('name'),
     (req, res) => {
          const newResource = req.body
          Resources.insert('resources', newResource)
               .then(postedNewResource => {
                    res.status(201).json({
                         message: 'New Resource Added',
                         newResource: postedNewResource
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