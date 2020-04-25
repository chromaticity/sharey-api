// User model for user information.

// This will be expanded on when I come up with more features

import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import crypto from 'crypto';

// User schema
let UserSchema = new Schema({
    username: {
        type: String,
        required: [true, "Username cannot be empty."],
        index: true
    },

    password: {
        type: String,
        required: "Password cannot be empty.",
        index: true
    }

}, {timestamps: true})


// Adding a method to a mongoose schema.
UserSchema.methods.setUserPassword = function(cb) {
    // generate the salt
    this.salt = crypto.randomBytes(16).toString('hex');
    // encrypt the password
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512');

    return this.hash;
};


// Plugin used for detecting if there is already a user that exists.
UserSchema.plugin(uniqueValidator, {message: "this is already taken."})

mongoose.model('User', UserSchema);