var express = require('express');
var router = express.Router();

Game = require('../models/game');
//get all games
router.get('/games', function(req, res){
    Game.getGames(function(err, games){
        if(err){
            res.json("Something went Wrong");
        }
        res.json(games);
    });
});

//get game by id
router.get('/games/:_id', function(req, res){
    Game.getGameById(req.params._id, function(err, game){
        if(err){
            res.json("Something went Wrong");
        }
        res.json(game);
    });
});

//add game
router.post('/games', function(req, res){
    var game = req.body;
    Game.addGame(game, function(err, game){
        if(err){
            res.json("Something went Wrong");
        }
        res.json(game);
    });
});

//update game
router.put('/games/:_id', function(req, res){
    var id = req.params._id;
    var game = req.body;
    Game.updateGame(id, genre, {}, function(err, game){
        if(err){
            res.json("Something went Wrong");
        }
        res.json(game);
    });
});

//delete game
router.delete('/games/:_id', function(req, res){
    var id = req.params._id;
    Game.deleteGame(id, function(err, game){
        if(err){
            res.json("Something went Wrong");
        }
        res.json(game);
    });
});

module.exports = router;
