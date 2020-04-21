/* 
* This is the code for jwt middleware. This middleware
* makes sure to intercept the request before allowing
* to go through routes, and making sure that the user/application
* is authenticated.
*/

import jwt from 'jsonwebtoken';
import credentials from '../configs/credentials.js';

// Verify the token.    
let verifyToken = (req, res, next) => {
    // Pull out the token from the headers
    let token = req.headers['x-access-token'] || req.headers['Authorization'] || req.headers['authorization'];

    // Check if the token starts with Bearer. If it does, just retrieve the key.
    if(token.startsWith('Bearer ')) {
        token = token.slice('7', token.length)
    }

    if(token) {
        jwt.verify(token, credentials.jwtSecret, function(errors, decoded) {
            if(errors) {
                res.json({
                    success: false,
                    message: 'Token is not valid.'
                });
            } else {
                req.decoded = decoded;
                next();
            }
        })
    } else {
        res.send(403).json({
            success: false,
            message: 'Access token is missing.'
        });
    }
}

// Verify why this works for middleware.
module.exports = {
    verifyToken: verifyToken
}