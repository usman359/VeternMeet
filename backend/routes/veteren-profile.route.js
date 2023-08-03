let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router()


let veterenProfileSchema = require('../models/VeterenProfile')



// CREATE Veteren profile
router.route('/create-veteren-profile').post((req, res, next) => {
  veterenProfileSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
})



// READ Veterens profile 
router.route('/').get((req, res) => {
  veterenProfileSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Get Single Veteren profile 
router.route('/get-veteren-profile-by-id/:id').get((req, res) => {
  veterenProfileSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})




module.exports = router
