var express = require('express');
var router = express.Router();

Developer = require('../models/developer');

//get all developers
router.get('/developers', function(req, res){
    Developer.getDevelopers(function(err, developers){
        if(err){
            throw err;
        }
        res.json(developers);
    });
});

//get developer by id
router.get('/developers/:_id', function(req, res){
    Developer.getDeveloperById(req.params._id, function(err, developer){
        if(err){
            throw err;
        }
        res.json(developer);
    });
});

//add developer
router.post('/developers', function(req, res){
    var developer = req.body;
    Developer.addDeveloper(developer, function(err, developer){
        if(err){
            throw err;
        }
        res.json(developer);
    });
});

//update developer
router.put('/developers/:_id', function(req, res){
    var id = req.params._id;
    var developer = req.body;
    Developer.updateDeveloper(id, developer, {}, function(err, developer){
        if(err){
            throw err;
        }
        res.json(developer);
    });
});

//delete developer
router.delete('/developers/:_id', function(req, res){
    var id = req.params._id;
    Developer.deleteDeveloper(id, function(err, developer){
        if(err){
            throw err;
        }
        res.json(developer);
    });
});

module.exports = router;
