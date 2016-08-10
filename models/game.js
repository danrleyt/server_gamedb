var mongoose = require('mongoose');

//Game Schema
var gameSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        index: {unique: true}
    },
    year:{
        type: String,
        required: true
    },
    poster:{
        type: String,
        required: true
    },
    genres: [{type: mongoose.Schema.Types.ObjectId, ref: 'Genre'}],
    modes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Mode'}],
    developer: {type: mongoose.Schema.Types.ObjectId, ref: 'Developer'},
    publisher: {type: mongoose.Schema.Types.ObjectId, ref: 'Publisher'},
    platforms: [{type: mongoose.Schema.Types.ObjectId, ref: 'Platform'}],
    esrb: {
        id: Number
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

var Game = module.exports = mongoose.model('Game', gameSchema);

//Get Games
module.exports.getGames = function(callback, limit){
    var populateQuery = ['genres', 'modes', 'developer', 'publisher', 'platforms'];
    Game.find(callback).limit(limit).populate(populateQuery);
};

//Get Game by ID
module.exports.getGameById = function(id, callback){
    var populateQuery = ['genres', 'modes', 'developer', 'publisher', 'platforms'];
    Game.findById(id, callback).populate(populateQuery);
};

//Add Game
module.exports.addGame = function(game, callback){
    Game.create(game, callback);
};

//Update Game
module.exports.updateGame = function(id, game, options, callback){
    var query = {_id: id};
    var update = {
        name: game.name,
        year: game.year,
        poster: game.poster,
        genres: game.genres,
        modes: game.modes,
        developer: game.developer,
        publisher: game.publisher,
        platforms: game.platforms,
        esrb : game.esrb
    };
    Game.findOneAndUpdate(query, update, options, callback);
};

//Delete Game
module.exports.deleteGame = function(id, callback){
    var query = {_id: id};
    Game.remove(query, callback);
};
