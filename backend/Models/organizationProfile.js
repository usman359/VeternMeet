const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let organizationProfileSchema = new Schema({
  name: {
    type: String
  },
  coFounder: {
    type: String
  },
  
  address: {
    type: String
  },

  noOfEmployee: {
    type: String
  }
  
}, {
    collection: 'organizationProfile'
  })

module.exports = mongoose.model('OrganizationProfile', organizationProfileSchema)