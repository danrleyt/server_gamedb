var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

//User Schema
var userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        index: {unique: true}
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre('save', function(next){
    var user = this;
    //only hash the password if it has been  modified (or is new)
    if(!user.isModified('password')) return next();

    //generate salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
        if(err) return next(err);

        //hash the password along with our new salt
        bcrypt.hash(user.password, salt, function(err, hash){
            if(err) return next(err);

            //override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function(candidatePassword, cb){
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
        if(err) return cb(err);
        cb(null, isMatch);
    });
};

var User = module.exports = mongoose.model('User', userSchema);

//Add User
module.exports.addUser = function(user, callback){
    var newUser = new User(user);
    newUser.save(function(err){
        if(err) throw err;
    });
};

//Login
module.exports.login = function(user, cb){
    User.findOne({ email: user.email}, function(err, u){
        if(err) throw err;
        var failedLogin = false;
        console.log("usuario achado " + u.email + " : " + u.password);
        u.comparePassword(user.password, function(err, isMatch){
            if(err) return cb(err);
            if(isMatch){
                return cb(null, u);
            }else {
                return cb(null, failedLogin);
            }
        });

    });
};
