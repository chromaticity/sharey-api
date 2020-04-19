// import the express route libraries
import express from 'express';
let router = express.Router();

// Any routes related to the home/base route go here.
router.get('/', function(req,res) {
    res.json({
        'app_name': 'Sharey App',
        'app_description': 'Application for uploading, saving, and tagging images.'
    })
});

export default router;