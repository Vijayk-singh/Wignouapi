const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    qustion:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'qustions'
    },
    
    description:{
        type: String,
       
    },
    
    date:{
        type: Date,
        default: Date.now
    },
  });
  const Answers = mongoose.model('answers', UserSchema);
  module.exports = Answers;