// User model for user information.

// This will be expanded on when I come up with more features

import mongoose from 'mongoose';

let UserSchema = new.mongoose.Schema({
    username: String,
    password: String
}, {timestamps: true})

mongoose.model('User', UserSchema);