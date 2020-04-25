
// Package imports go here.
import express from 'express';
import mongoose, { mongo } from 'mongoose';
import credentials from './configs/credentials.js'
import bodyParser from 'body-parser';

// Initialize express, and the port node listens on
let app = express();
let port = 3000

// always import body parser for parsing json, lmao
app.use(bodyParser.json());

// Initialize mongoose/mongo
let mongoDbUrl = credentials.mongo_url + credentials.database_name;
mongoose.connect(mongoDbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connecting to MongoDB. Reason:'));



// Add any necessary routes here.
import home from './routes/Home/home.js';
import auth from './routes/Auth/login.js'
import register from './routes/Auth/register.js'

// Add any needed middleware here.
import authMiddleware from './middleware/jwtMiddleware.js'

// Add route prefix of /api since this is an api.
app.use('/api/auth', auth);
app.use('/api/auth', register);

// Run the application.
app.listen(port, () => console.log(`App running on http://localhost:${port}`))