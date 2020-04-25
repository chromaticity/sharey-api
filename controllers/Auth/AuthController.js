import jwt from 'jsonwebtoken';
import credentials from '../../configs/credentials.js';

// Function that takes care of logging in.
exports.authLoginUser = (req, res) => {
    let username = req.username;
    let password = req.password;

    // fake values for now, this is just to test jwt
    // @TODO replace with actual mongodb values.
    let actualUsername = 'test';
    let actualPassword = '123456';

    // Some request validation. Also checking to see that the creds are the same.
    if(username && password) {
        if(username === actualUsername && password === actualPassword) {
            // Generate the client token if authentication goes well.
            let clientToken = jwt.sign(
                {
                    username: username, // Name of the client
                    iat: credentials.tokenIssuer // Issuer of the token
                },
                credentials.jwtSecret,
                {
                    expiresIn: '1h'
                }
            );

            // Return the token for the client to use.
            res.json({
                success: true,
                message: 'Authentication succeeded.',
                token: clientToken
            });
        }
    } else {
        res.send(403).json({
            success: false,
            message: 'Please enter a username or password.'
        })
    }
}


// Register the user
exports.authRegisterUser = (req, res) => {
    console.log(req.body.username)
    let username = req.username || null;
    let password = req.password || null;

    if(username && password) {
        // Store the credentials.
        // Later, we'll add email notifications/confirmations.

    } else {
        res.send({
            success: false,
            message: 'Please enter a username and password..'
        });
    }

}