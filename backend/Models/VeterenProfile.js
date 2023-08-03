const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let veterenProfileSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  age: {
    type: Number
  },
  address: {
    type: String
  },
  professionalstatus: {
    type: String
  },
  training: {
    type: String
  }
}, {
    collection: 'veterensprofile'
  })

module.exports = mongoose.model('VeterenProfile', veterenProfileSchema)