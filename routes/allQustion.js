var express = require('express');
var router = express.Router();
var qustions = require('../db/models/qustions')
const fetchuser = require('./Miidleware/fetchuser');

/* GET users listing. */
router.get('/',fetchuser, async function(req, res, next) {
    // var {title, description} = req.body;
    let qustionall = await qustions.find();
//   if (!user) {
//     return res.status(400).json({ error: "Sorry a user with this email already exists" })
//   }

  res.send(qustionall);
  
});


module.exports = router;
