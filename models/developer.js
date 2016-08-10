var mongoose = require('mongoose');

//Developer Schema
var developerSchema = mongoose.Schema({
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

var Developer = module.exports = mongoose.model('Developer', developerSchema);

//Get Developers
module.exports.getDevelopers = function(callback, limit){
    Developer.find(callback).limit(limit);
};

//Get Developer by ID
module.exports.getDeveloperById = function(id, callback){
    Developer.findById(id, callback);
};

//Add Developer
module.exports.addDeveloper = function(developer, callback){
    Developer.create(developer, callback);
};

//Update Genre
module.exports.updateDeveloper = function(id, developer, options, callback){
    var query = {_id: id};
    var update = {
        name: developer.name
    };
    Developer.findOneAndUpdate(query, update, options, callback);
};

//Delete Genre
module.exports.deleteDeveloper = function(id, callback){
    var query = {_id: id};
    Developer.remove(query, callback);
};
