const express = require('express');
const  { handleGetBook } = require('../controllers/book.js')
const { getSpecificBook } = require('../controllers/book.js')
const { handleSearch } = require('../controllers/book.js');

const router = express.Router();

router.get('/',handleGetBook);

router.get('/:id',getSpecificBook);

router.get('/find/search',handleSearch);




module.exports = router;