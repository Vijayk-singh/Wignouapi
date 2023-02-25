var express = require('express');
var router = express.Router();
var qustions = require('../db/models/qustions')

/* GET users listing. */
router.post('/', async function(req, res, next) {
    var {title, description} = req.body;
    // let user = await users.findOne({ username});
//   if (user) {
//     return res.status(400).json({ error: "Sorry a user with this email already exists" })
//   }
let qustion = await qustions.create({
    title: title,
    description: description,
    user:'63d289f2f16dade66cb1711c'
    
  });
  res.send('created');
  
});


module.exports = router;
