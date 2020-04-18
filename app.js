import express from 'express';
let app = express();
let port = 3000

// Add any necessary routes here.
import home from './routes/Home/home.js';

// Add route prefix of /api since this is an api.
app.use(
    '/api/',
    home
);


// Run the application.
app.listen(port, () => console.log(`App running on http://localhost:${port}`))