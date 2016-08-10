var express = require('express');
var router = express.Router();

Publisher = require('../models/publisher');

//get all publishers
router.get('/publishers', function(req, res){
    Publisher.getPublishers(function(err, publisher){
        if(err){
            res.json("Something went Wrong");
        }
        res.json(publisher);
    });
});

//get publisher by id
router.get('/publishers/:_id', function(req, res){
    Publisher.getPublisherById(req.params._id, function(err, publisher){
        if(err){
            res.json("Something went Wrong");
        }
        res.json(publisher);
    });
});

//add publisher
router.post('/publishers', function(req, res){
    var publisher = req.body;
    Publisher.addPublisher(publisher, function(err, publisher){
        if(err){
            res.json("Something went Wrong");
        }
        res.json(publisher);
    });
});

//update publisher
router.put('/publishers/:_id', function(req, res){
    var id = req.params._id;
    var publisher = req.body;
    Publisher.updatePublisher(id, mode, {}, function(err, publisher){
        if(err){
            res.json("Something went Wrong");
        }
        res.json(publisher);
    });
});

//delete publisher
router.delete('/publishers/:_id', function(req, res){
    var id = req.params._id;
    Publisher.deletePublisher(id, function(err, publisher){
        if(err){
            res.json("Something went Wrong");
        }
        res.json(publisher);
    });
});

module.exports = router;
