var express = require('express');
var router = express.Router();
var users = require('../db/models/users')
var jwt = require('jsonwebtoken');
var cors = require('cors') 

const app = express()
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
/* GET users listing. */
router.post('/', async function(req, res, next) {
    var {username,password} = req.body;
    let success = false;
    let JWT_SECRET = "abcd"
    let user = await users.findOne({ name:username });
    // var pwdcmp =password==user.password;
  if (!user ) {
    return res.status(400).json({ error: "user not found",success })
  }
 
  else if(password!=user.password){
    return res.status(400).json({ error: "incorrect pass",success })
  }
  else {
    const data = user._id;
    const authtoken = jwt.sign({id:user._id}, JWT_SECRET,{expiresIn: '5000s'});
    success = true;
 
    res.json({ authtoken,success, user })
    // console.log(user)
    
  }
 
});

module.exports = router;
