var express = require('express');
var router = express.Router();

Mode = require('../models/mode');

//get all modes
router.get('/modes', function(req, res){
    Mode.getModes(function(err, modes){
        if(err){
            res.json("Something went Wrong");
        }
        res.json(modes);
    });
});

//get mode by id
router.get('/modes/:_id', function(req, res){
    Mode.getModeById(req.params._id, function(err, mode){
        if(err){
            res.json("Something went Wrong");
        }
        res.json(mode);
    });
});

//add mode
router.post('/modes', function(req, res){
    var mode = req.body;
    Mode.addMode(mode, function(err, mode){
        if(err){
            res.json("Something went Wrong");
        }
        res.json(mode);
    });
});

//update modes
router.put('/modes/:_id', function(req, res){
    var id = req.params._id;
    var mode = req.body;
    Mode.updateMode(id, mode, {}, function(err, mode){
        if(err){
            res.json("Something went Wrong");
        }
        res.json(mode);
    });
});

//delete mode
router.delete('/modes/:_id', function(req, res){
    var id = req.params._id;
    Mode.deleteMode(id, function(err, mode){
        if(err){
            res.json("Something went Wrong");
        }
        res.json(mode);
    });
});

module.exports = router;
