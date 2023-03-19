var express = require('express');
var router = express.Router();
var qustions = require('../db/models/qustions')
const fetchuser = require('./Miidleware/fetchuser');
var jwt = require('jsonwebtoken');
const JWT_SECRET = "abcd";


/* GET users listing. */
router.get('/',fetchuser, async function(req, res, next) {
    // var {title, description} = req.body;
    const token = req.header("auth-token");
   
    const decode = jwt.verify(token, JWT_SECRET);
    
    let qustionall = await qustions.find({user:decode.id });
    console.log(decode.id )
//   if (!user) {
//     return res.status(400).json({ error: "Sorry a user with this email already exists" })
//   }

  res.send(qustionall);
  
});


module.exports = router;
