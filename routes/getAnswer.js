var express = require('express');
var router = express.Router();
var answers = require('../db/models/answers')

var jwt = require('jsonwebtoken');
const JWT_SECRET = "abcd";


/* GET users listing. */
router.get('/', async function(req, res, next) {
    // var {title, description} = req.body;
    var name = req.query.name;
    console.log(name);
    const token = req.header("auth-token");
   
    const decode = jwt.verify(token, JWT_SECRET);
    
    let answerall = await answers.find({qustion:name });
    console.log(decode.id )
  if (!user) {
    return res.status(400).json({ error: "Sorry a user with this email already exists" })
  }
res.send("sfdf" )
  // res.send(answerall);
  
});


module.exports = router;
