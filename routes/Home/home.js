// import the express route libraries
let express = require('express');
let router = express.Router();

// get the stupid fuckin home page route
router.get('/', function(req,res) {
    res.json({
        'app_name': 'Sharey App',
        'app_description': 'Application for uploading, saving, and tagging images.'
    })
});

module.exports = router;