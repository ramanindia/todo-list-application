//app/models/home.js
//load the things we need

var mongoose = require('mongoose');
//define the schema for home model
var itemSchema = mongoose.Schema({	
	title:  {
    type: String,
    required:[true,"Item title is required"],
    maxlength: [60,"Item title max length is 60"],
      match : [
            new RegExp('^[a-z0-9_.-]+$', 'i'),
            '{PATH} \'{VALUE}\' is not valid. Use only letters, numbers, underscore or dot.'
        ],
  },
	is_deleted: Boolean,
	is_marked: Boolean,
	created_date: { type: Date, default: Date.now },
});

//create the model for users and expose it to our app
module.exports = mongoose.model('items', itemSchema);