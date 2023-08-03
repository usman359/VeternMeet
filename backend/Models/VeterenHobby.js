const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let veterenHobbySchema = new Schema({
  hobby: {
    type: String
  }
}, {
    collection: 'veterenshobbies'
  })

module.exports = mongoose.model('VeterenHobby', veterenHobbySchema)