var express = require('express');
var router = express.Router();
var users = require('../db/models/users')

/* GET users listing. */
router.post('/', async function(req, res, next) {
    var {email, username, password} = req.body;
    let user = await users.findOne({ username});
//   if (user) {
//     return res.status(400).json({ error: "Sorry a user with this email already exists" })
//   }
  user = await users.create({
    email: email,
    name: username,
    password: password,
  });
  res.send('created');
  
});

module.exports = router;
