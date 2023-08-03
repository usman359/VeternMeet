const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let educationProfileSchema = new Schema({
  name: {
    type: String
  },

  headname: {
    type: String
  },
 
  address: {
    type: String
  },

  contactno: {
    type: String
  },

  noOfDepartment: {
    type: Number
  },

  viceHeadName: {
    type: String
  },

  noOfStudent: {
    type: Number
  },

  noOfFaculty: {
    type: Number
  },

  noOfCampuses:{
     type:Number
  }
  
}, {
    collection: 'educationprofile'
  })

module.exports = mongoose.model('Educationprofile', educationProfileSchema)