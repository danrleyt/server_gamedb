var mongoose = require('mongoose');

//Publisher Schema
var publisherSchema = mongoose.Schema({
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

var Publisher = module.exports = mongoose.model('Publisher', publisherSchema);

//Get Publishers
module.exports.getPublishers = function(callback, limit){
    Publisher.find(callback).limit(limit);
};

//Get Publisher by ID
module.exports.getPublisherById = function(id, callback){
    Publisher.findById(id, callback);
};

//Add Publisher
module.exports.addPublisher = function(publisher, callback){
    Publisher.create(publisher, callback);
};

//Update Publisher
module.exports.updatePublisher = function(id, publisher, options, callback){
    var query = {_id: id};
    var update = {
        name: publisher.name
    };
    Publisher.findOneAndUpdate(query, update, options, callback);
};

//Delete Publisher
module.exports.deletePublisher = function(id, callback){
    var query = {_id: id};
    Publisher.remove(query, callback);
};
