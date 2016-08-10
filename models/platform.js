var mongoose = require('mongoose');

//Platform Schema
var platformSchema = mongoose.Schema({
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

var Platform = module.exports = mongoose.model('Platform', platformSchema);

//Get Platforms
module.exports.getPlatforms = function(callback, limit){
    Platform.find(callback).limit(limit);
};

//Get Platform by ID
module.exports.getPlatformById = function(id, callback){
    Platform.findById(id, callback);
};

//Add Platform
module.exports.addPlatform = function(platform, callback){
    Platform.create(platform, callback);
};

//Update Platform
module.exports.updatePlatform = function(id, platform, options, callback){
    var query = {_id: id};
    var update = {
        name: platform.name
    };
    Platform.findOneAndUpdate(query, update, options, callback);
};

//Delete Platform
module.exports.deletePlatform = function(id, callback){
    var query = {_id: id};
    Platform.remove(query, callback);
};
