var express = require('express');
var router = express.Router();

Platform = require('../models/platform');

//get all platform
router.get('/platforms', function(req, res){
    Platform.getPlatforms(function(err, platforms){
        if(err){
            res.json("Something went Wrong");
        }
        res.json(platforms);
    });
});

//get platform by id
router.get('/platforms/:_id', function(req, res){
    Platform.getPlatformById(req.params._id, function(err, platform){
        if(err){
            res.json("Something went Wrong");
        }
        res.json(platform);
    });
});

//add platform
router.post('/platforms', function(req, res){
    var platform = req.body;
    Platform.addPlatform(platform, function(err, platform){
        if(err){
            res.json("Something went Wrong");
        }
        res.json(platform);
    });
});

//update platform
router.put('/platforms/:_id', function(req, res){
    var id = req.params._id;
    var platform = req.body;
    Platform.updatePlatform(id, platform, {}, function(err, platform){
        if(err){
            res.json("Something went Wrong");
        }
        res.json(platform);
    });
});

//delete platform
router.delete('/platforms/:_id', function(req, res){
    var id = req.params._id;
    Platform.deletePlatform(id, function(err, platform){
        if(err){
            res.json("Something went Wrong");
        }
        res.json(platform);
    });
});

module.exports = router;
