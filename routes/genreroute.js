var express = require('express');
var router = express.Router();

Genre = require('../models/genre');

//get all genres
router.get('/genres', function(req, res){
    try{
        Genre.getGenres(function(err, genres){
            if(err){
                res.json("Something went Wrong");
            }
            res.json(genres);
        });
    }catch(e){
        res.json(e.message);
    }
});

//get genre by id
router.get('/genres/:_id', function(req, res){
    try{
        Genre.getGenreById(req.params._id, function(err, genre){
            if(err){
                res.json("Something went Wrong");
            }
            res.json(genre);
        });
    }catch (e){
        res.json(e);
    }
});

//add genre
router.post('/genres', function(req, res){
    var genre = req.body;
    Genre.addGenre(genre, function(err, genre){
        if(err){
            res.json("Something went Wrong");
        }
        res.json(genre);
    });
});

//update genre
router.put('/genres/:_id', function(req, res){
    var id = req.params._id;
    var genre = req.body;
    Genre.updateGenre(id, genre, {}, function(err, genre){
        if(err){
            res.json("Something went Wrong");
        }
        res.json(genre);
    });
});

//delete genre
router.delete('/genres/:_id', function(req, res){
    var id = req.params._id;
    Genre.deleteGenre(id, function(err, genre){
        if(err){
            res.json("Something went Wrong");
        }
        res.json(genre);
    });
});

module.exports = router;
