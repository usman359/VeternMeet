let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router()

// ngo Model
let ngoProfileSchema = require('../models/NGOProfile')



// CREATE ngo Profile
router.route('/create-ngo-profile').post((req, res, next) => {
  ngoProfileSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
})


// READ ngo profile data
router.route('/').get((req, res) => {
  ngoProfileSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single ngo profile data by id
router.route('/get-ngo-profile-by-id/:id').get((req, res) => {
  ngoProfileSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update ngo profile by id
router.route('/update-ngo-profile/:id').put((req, res, next) => {
  ngoProfileSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error)
        console.log(error)
      } else {
        res.json(data)
        console.log('ngo profile updated successfully !')
      }
    },
  )
})

// Delete ngo profile by id
router.route('/delete-ngo-profile/:id').delete((req, res, next) => {
  ngoProfileSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data,
      })
    }
  })
})

module.exports = router
