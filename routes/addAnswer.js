var express = require("express");
var router = express.Router();
var answers = require("../db/models/answers");
const fetchuser = require("./Miidleware/fetchuser");
var jwt = require('jsonwebtoken');
const JWT_SECRET = "abcd";


/* GET users listing. */

router.post("/", fetchuser, async function (req, res, next) {
  var { title, description } = req.body;

 
    // Get the user from the jwt token and add id to req object
    const token = req.header("auth-token");
   
      const decode = jwt.verify(token, JWT_SECRET);
      
    

  let answer = await answers.create({
  
  
    description: description,
    user: decode.id,
    qustion:"640480b3f249fe9126a90b93"
   
  });
//   const note = new qustions({
//     title, description,user: userid,
// })
// const qustion = await note.save()

  res.send(answer);
  // var userid =req.user;

});

module.exports = router;
