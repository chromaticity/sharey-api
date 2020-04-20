import jwt from 'jsonwebtoken';
import credentials from '../../configs/credentials.js';

// Function that takes care of logging in.
exports.authLoginClient = (req, res) => {
    let clientName = req.body.clientName;
    let clientSecret = req.body.clientSecret;

    // fake values for now, this is just to test jwt
    // @TODO replace with actual mongodb values.
    let actualClientName = 'test';
    let actualClientSecret = '123456';

    // Some request validation. Also checking to see that the creds are the same.
    if(clientName && clientSecret) {
        if(clientName === actualClientName && clientSecret === actualClientSecret) {
            // Generate the client token if authentication goes well.
            let clientToken = jwt.sign(
                {
                    clientName: clientName
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
            message: 'Please send a client name and a client secret.'
        })
    }
}

exports.authLogout = (req, res) => {
    //@TODO kill session.
}