const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
       
    },
    tag:{
        type: String,
        default: "General"
    },
    date:{
        type: Date,
        default: Date.now
    },
  });
  const Qustions = mongoose.model('qustions', UserSchema);
  module.exports = Qustions;