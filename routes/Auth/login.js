// import express libraries
import express from 'express';
let router = express.Router();

// import any controllers
import AuthController from '../../controllers/Auth/AuthController.js'

router.post('/login', AuthController.authLogin);

export default router;