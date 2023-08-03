const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ngoprofileSchema = new Schema({
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
    collection: 'ngoProfile'
  })

module.exports = mongoose.model('NgoProfile', ngoprofileSchema)