const express = require('express');

const { addToCart } = require('../controllers/cart.js');

const { getCart } = require('../controllers/cart.js');

const { handleDeleteCart } = require('../controllers/cart.js');

const { restrictToLoggedInUserOnly } = require('../middlewares/auth.js');

const router = express.Router();

router.post('/add', restrictToLoggedInUserOnly, addToCart);

router.get('/', restrictToLoggedInUserOnly, getCart);

router.delete('/remove/:id',restrictToLoggedInUserOnly,handleDeleteCart);

module.exports = router;