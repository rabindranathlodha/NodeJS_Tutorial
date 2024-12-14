const express = require('express');
const { handleGeneraterShortURL, handleGetAnalytics } = require('../controllers/urls')

const router = express.Router();

router.post('/', handleGeneraterShortURL);

router.get('/analytics/:shortID', handleGetAnalytics)

module.exports = router;