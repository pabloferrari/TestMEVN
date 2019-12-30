let mongoose = require('mongoose');

let usrSchema = mongoose.Schema({

    firstName: { type: String },
    lastName: { type: String },
    username: { type: String, unique: true, required:true },
    email: { type: String, unique: true, required:true },
    created: {
        type: Date,
        default: Date.now
    }

});

const User = mongoose.model('users', usrSchema);
module.exports = User;