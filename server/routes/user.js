const express = require('express');

const { handleUserStatus } = require('../controllers/user.js');
const { handleUserSignUp } = require('../controllers/user.js');
const { handleUserLogin } = require('../controllers/user.js');
const { handleUserLogout } = require('../controllers/user.js');
const { restrictToLoggedInUserOnly } = require('../middlewares/auth.js');

const router = express.Router();
router.get('/status',restrictToLoggedInUserOnly, handleUserStatus);
router.post('/signup', handleUserSignUp);
router.post('/login', handleUserLogin);
router.post('/logout', handleUserLogout);

module.exports = router;