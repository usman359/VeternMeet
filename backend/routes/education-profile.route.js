let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router()

// Education Model
let educationProfileSchema = require('../models/educationProfile')

// CREATE Education profile
router.route('/create-education-profile').post((req, res, next) => {
  educationProfileSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
})


// READ Education profile data
router.route('/').get((req, res) => {
  educationProfileSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Education profile data by id
router.route('/get-education-profile-by-id/:id').get((req, res) => {
  educationProfileSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update Education profile by id
router.route('/update-education-profile/:id').put((req, res, next) => {
  educationProfileSchema.findByIdAndUpdate(
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
        console.log('education profile updated successfully !')
      }
    },
  )
})

// Delete Education profile by id
router.route('/delete-education-profile/:id').delete((req, res, next) => {
  educationProfileSchema.findByIdAndRemove(req.params.id, (error, data) => {
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
