var mongoose = require('mongoose');

//Mode Schema
var modeSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        index: {unique: true}
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

var Mode = module.exports = mongoose.model('Mode', modeSchema);

//Get Modes
module.exports.getModes = function(callback, limit){
    Mode.find(callback).limit(limit);
};

//Get Mode by ID
module.exports.getModeById = function(id, callback){
    Mode.findById(id, callback);
};

//Add Mode
module.exports.addMode = function(mode, callback){
    Mode.create(mode, callback);
};

//Update Mode
module.exports.updateMode = function(id, mode, options, callback){
    var query = {_id: id};
    var update = {
        name: mode.name
    };
    Mode.findOneAndUpdate(query, mode, options, callback);
};

//Delete Mode
module.exports.deleteMode = function(id, callback){
    var query = {_id: id};
    Mode.remove(query, callback);
};
