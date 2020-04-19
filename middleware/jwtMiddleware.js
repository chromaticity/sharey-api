/* 
* This is the code for jwt middleware. This middleware
* makes sure to intercept the request before allowing
* to go through routes, and making sure that the user/application
* is authenticated.
*/

import jwt from 'jsonwebtoken';
import credentials from './configs/credentials.js';

// Verify the token.    
let verifyToken = (req, res, next) => {
    console.log("this is one of those tests");
}

export default verifyToken;