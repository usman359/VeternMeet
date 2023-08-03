let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router()

// organization Model
let organizationProfileSchema = require('../models/organizationProfile')

// CREATE organization profile
router.route('/create-organization-profile').post((req, res, next) => {
  organizationProfileSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
})


// READ organization profile data
router.route('/').get((req, res) => {
  organizationProfileSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single organization profile data by id
router.route('/get-organization-profile-by-id/:id').get((req, res) => {
  organizationProfileSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update organization profile by id
router.route('/update-organization-profile/:id').put((req, res, next) => {
  organizationProfileSchema.findByIdAndUpdate(
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
        console.log('organization profile updated successfully !')
      }
    },
  )
})

// Delete organization profile by id
router.route('/delete-organization-profile/:id').delete((req, res, next) => {
  organizationProfileSchema.findByIdAndRemove(req.params.id, (error, data) => {
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
