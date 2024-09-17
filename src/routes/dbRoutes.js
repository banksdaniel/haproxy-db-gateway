const express = require('express');
const router = express.Router();
const { getTime } = require('../controllers/dbController');
const authorizeUser = require('../middleware/authorization');

router.get('/', authorizeUser, getTime);

module.exports = router;
