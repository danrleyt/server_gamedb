var express = require('express');
var router = express.Router();

User = require('../models/user');
//add game
router.post('/user', function(req, res){
    var user = req.body;
    User.addUser(user, function(err, user){
        if(err) throw err;
    });
    res.json("User Added");
});

//login
router.post('/user/login', function(req, res){
    var user = req.body;
    console.log();
    User.login(user, function(err, u){
        if(err) res.json("Something went Wrong");
        if(u){
            res.json("oi");
        }else {
            res.json("problema");
        }
    });
});

//get by id and return hashed password
router.get('/user/:_id', function(req, res){
    User.getUserById(req.params._id, function(err, user){
        if(err){
            res.json("Something went Wrong");
        }
        console.log(user.password.toString());
        res.json(user);
    })
});

module.exports = router;
